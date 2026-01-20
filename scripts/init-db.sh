#!/bin/bash

# Database initialization script
# This script helps set up the PostgreSQL database for the custom-wp-site project

# Check if .env file exists
if [ ! -f .env ]; then
    echo "Error: .env file not found!"
    echo "Please copy .env.example to .env and configure your database credentials."
    echo "Run: cp .env.example .env"
    exit 1
fi

# Source the .env file to get database credentials
source .env

echo "Initializing database: $DB_NAME"
echo "Host: $DB_HOST:$DB_PORT"
echo ""

# Check if database exists
DB_EXISTS=$(psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -lqt | cut -d \| -f 1 | grep -qw "$DB_NAME"; echo $?)

if [ $DB_EXISTS -eq 0 ]; then
    echo "Database '$DB_NAME' already exists."
    read -p "Do you want to recreate it? This will delete all existing data! (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Dropping existing database..."
        psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -c "DROP DATABASE $DB_NAME;"
    else
        echo "Skipping database creation."
        echo "Running schema migrations..."
        psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" -f src/lib/schema.sql
        echo "Database schema updated successfully!"
        exit 0
    fi
fi

# Create database
echo "Creating database..."
psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -c "CREATE DATABASE $DB_NAME;"

# Run schema
echo "Running schema migrations..."
psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" -f src/lib/schema.sql

echo ""
echo "✓ Database initialized successfully!"
echo ""
echo "You can now start the development server with:"
echo "  npm run dev"
