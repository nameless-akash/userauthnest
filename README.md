## Project Overview

This project provides a simple RESTful API for managing user profiles. It includes functionality to retrieve user profiles, update profile visibility, and authenticate users using JWT tokens.

### Files

- **profileRoutes.js**: Contains route handlers for retrieving user profiles, updating profile visibility, and fetching all profiles.
- **server.js**: Main entry point of the application where the Express server is initialized and routes are defined.
- **middleware.js**: Middleware function for verifying JWT tokens and extracting user information from the token.
- **database.db**: SQLite database file containing the profiles table schema and sample data.

### Usage

1. **Installation**

    - Clone the repository:

      ```bash
      git clone https://github.com/nameless-akash/userauthrest.git
      ```

    - Install dependencies:

      ```bash
      npm install
      ```

2. **Starting the Server**

   Start the server by running:

   ```bash
   node server.js
   ```

   The server will start at `http://localhost:3000`.

3. **API Endpoints**

    - `GET /api/profiles/:userId`: Retrieve the profile of a specific user by their ID.
    - `GET /api/profiles`: Retrieve all profiles. Normal users will only see public profiles, while admin users can see all profiles.
    - `PUT /api/profiles/:userId/visibility`: Update the visibility of a user's profile.

4. **Authentication**

    - The API uses JWT tokens for authentication. Include the token in the request headers as follows:

      ```plaintext
      Authorization: Bearer <token>
      ```

    - For demonstration purposes, the token is hardcoded in the `verifyToken` middleware.

### Testing

You can test the API using tools like `curl`, `Postman`.