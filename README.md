# Custom WP Site

A modern full-stack web application built with **Next.js** as the frontend and backend framework, **Node.js** as the runtime, and **PostgreSQL** as the database.

## 🚀 Tech Stack

- **Next.js 16+** - React framework with App Router for frontend and API routes for backend
- **TypeScript** - Type-safe development
- **Node.js** - JavaScript runtime
- **PostgreSQL** - Relational database
- **Tailwind CSS** - Utility-first CSS framework
- **pg** - PostgreSQL client for Node.js

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.17 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd custom-wp-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the example environment file and update it with your database credentials:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and update the following variables:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/custom_wp_site
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=custom_wp_site
   DB_USER=your_username
   DB_PASSWORD=your_password
   NODE_ENV=development
   ```

4. **Set up the database**
   
   Create a new PostgreSQL database:
   ```bash
   psql -U postgres
   CREATE DATABASE custom_wp_site;
   \q
   ```
   
   Run the database schema:
   ```bash
   psql -U your_username -d custom_wp_site -f src/lib/schema.sql
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Mode
```bash
npm run build
npm start
```

## 📁 Project Structure

```
custom-wp-site/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── api/             # API routes (backend)
│   │   │   ├── users/       # User endpoints
│   │   │   └── posts/       # Post endpoints
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   └── lib/                 # Utilities and database
│       ├── db.ts           # PostgreSQL connection pool
│       └── schema.sql      # Database schema
├── public/                  # Static assets
├── .env.example            # Environment variables template
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🔌 API Endpoints

### Users
- `GET /api/users` - Fetch all users
- `POST /api/users` - Create a new user
  ```json
  {
    "email": "user@example.com",
    "name": "John Doe"
  }
  ```

### Posts
- `GET /api/posts` - Fetch all posts with author information
- `POST /api/posts` - Create a new post
  ```json
  {
    "title": "My Post Title",
    "content": "Post content here...",
    "user_id": 1,
    "published": false
  }
  ```

## 🗃️ Database Schema

### Users Table
| Column     | Type      | Description              |
|------------|-----------|--------------------------|
| id         | SERIAL    | Primary key              |
| email      | VARCHAR   | Unique email address     |
| name       | VARCHAR   | User's name              |
| created_at | TIMESTAMP | Creation timestamp       |
| updated_at | TIMESTAMP | Last update timestamp    |

### Posts Table
| Column     | Type      | Description              |
|------------|-----------|--------------------------|
| id         | SERIAL    | Primary key              |
| title      | VARCHAR   | Post title               |
| content    | TEXT      | Post content             |
| user_id    | INTEGER   | Foreign key to users     |
| published  | BOOLEAN   | Publication status       |
| created_at | TIMESTAMP | Creation timestamp       |
| updated_at | TIMESTAMP | Last update timestamp    |

## 🧪 Testing the API

You can test the API endpoints using curl or any API client like Postman:

### Create a user
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User"}'
```

### Get all users
```bash
curl http://localhost:3000/api/users
```

### Create a post
```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"My First Post","content":"Hello World!","user_id":1,"published":true}'
```

### Get all posts
```bash
curl http://localhost:3000/api/posts
```

## 🎨 Customization

- **Styling**: Modify `src/app/globals.css` and use Tailwind utility classes
- **Database**: Update `src/lib/schema.sql` to add new tables or modify existing ones
- **API Routes**: Add new endpoints in `src/app/api/`
- **Pages**: Create new pages in `src/app/`

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

ISC

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.