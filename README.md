# Virtual Medical Site- Full Stack

This is a full-stack application that demonstrates a frontend questionnaire whose structure and interactivity is determined by a schema-driven flow fetched as JSON from the backend.

## Features

-   Create and manage surveys
-   Collect and validate survey responses
-   View survey results and analytics
-   Export survey data
-   Mobile-responsive design

## Tech Stack

### Frontend

-   Vite React
-   TypeScript (shared types between frontend/backend)
-   React Router 6.4 with createBrowserRouter
-   easy-peasy Redux for state management
-   Zod for survey validation
-   Tailwind & Sass for styling
-   Real-time development with nodemon
-   Concurrent frontend/backend development
-   ESLint/Prettier for code quality
-   Responsive design (mobile-first approach)

### Backend API

-   Node/Express
-   TypeScript
-   lowdb with JSON storage
-   Survey data validation
-   Response aggregation

## Getting Started

1. Clone the repository
2. Install dependencies:
    ```bash
    npm i
    ```
3. Start development servers:
    ```bash
    npm run dev
    ```
    This will launch both backend and frontend servers concurrently.

## Development

-   Frontend runs on `http://localhost:3200`
-   Backend API runs on `http://localhost:3300`
-   Database file located at `backend/data/db.json`
