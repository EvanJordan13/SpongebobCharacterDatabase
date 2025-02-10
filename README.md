# Learning Management System Admin Panel

A web application that provides admin functionality for managing courses and faculty in a learning management system. Built with Next.js, MongoDB, Mongoose and TypeScript.

## Features

- Manage courses and teachers in a user-friendly interface
- Create and edit courses with descriptions, enrollment numbers, and assigned teachers
- Track faculty members and their associated courses
- Automatic calculation of total enrollments for each teacher
- Responsive design with modern UI components

## Tech Stack

- **Frontend**: Next.js 13+, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **ORM**: Mongoose

## Prerequisites

- Node.js 16.8 or later
- MongoDB running locally on port 27017
- Git

## Local Development Setup

1. Clone the repository

```bash
git clone [repository-url]
cd lms-admin
```

2. Install dependencies

```bash
npm install
```

3. Set up your MongoDB:
   - Install MongoDB if you haven't already
   - Start MongoDB

```bash
# Create data directory (if you haven't already)
mkdir -p ~/data/db

# Start MongoDB
mongod --dbpath ~/data/db
4. Set up your environment variables by creating a `.env.local` file:

```

DATABASE_URL="mongodb://localhost:27017/lms"



5. Start the development server

```bash
npm run dev
````

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   └── api/            # API routes
│       ├── courses/
│       └── teachers/
├── components/         # React components
├── lib/
│   ├── db.ts          # Database connection
│   └── services/      # API service functions
├── models/            # Mongoose models
└── types/            # TypeScript definitions
```

