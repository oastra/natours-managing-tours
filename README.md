# Natours Project

## Project Overview

Natours is a Node.js, Express, and MongoDB-based application for managing tours. The application allows users to view, create, update, and delete tour information. This repository contains the code for the Natours application.

## Key Features

- View all tours
- View a single tour
- Create a new tour
- Update an existing tour
- Delete a tour

## Project Structure

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v12+ recommended)
- [npm](https://www.npmjs.com/) (v6+ recommended)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository**

   ```sh
   git clone <repository_url>
   cd natours
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

### Running the Development Server

    ```sh
    npm run dev
    ```

Starts the application at `http://localhost:3000`.

### Building for Production

    ```sh
    npm run build
    ```

Outputs built files to the `dist` directory.

## Project Structure

    - controllers/: Contains controller files.
        - tourController.js: Tour-related controller functions.
        - userController.js: User-related controller functions.
    - models/: Contains model files.
        - tourModel.js: Mongoose schema and model for tours.
    - routes/: Contains route files.
        - tourRoutes.js: Routes for tour-related endpoints.
        - userRoutes.js: Routes for user-related endpoints.
    - public/: Contains static HTML files.
        - overview.html: Overview page.
        - tour.html: Tour details page.

## Routing

Defined in `tourRoutes.js` and `userRoutes.js`:

    - /api/v1/tours: Handles CRUD operations for tours.
    - /api/v1/users: Handles CRUD operations for users.

## Navigation Guards

Global and per-route middleware for handling authentication and logging.

## Dependencies

    - express
    - mongoose
    - slugify
    - validator

## DevDependencies

    - nodemon

## License

Licensed under the MIT License.
# natours-managing-tours
