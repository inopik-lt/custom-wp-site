import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET all posts
export async function GET() {
  try {
    const result = await query(`
      SELECT p.*, u.name as author_name, u.email as author_email
      FROM posts p
      LEFT JOIN users u ON p.user_id = u.id
      ORDER BY p.created_at DESC
    `);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST create new post
export async function POST(request: NextRequest) {
  try {
    const { title, content, user_id, published } = await request.json();
    
    if (!title || !user_id) {
      return NextResponse.json({ error: 'Title and user_id are required' }, { status: 400 });
    }

    const result = await query(
      'INSERT INTO posts (title, content, user_id, published) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, content, user_id, published || false]
    );
    
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error: unknown) {
    console.error('Error creating post:', error);
    
    // PostgreSQL error handling
    if (error && typeof error === 'object' && 'code' in error && error.code === '23503') {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
