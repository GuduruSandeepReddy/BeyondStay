
# BeyondStay - Vacation Rental Platform

## Overview

**BeyondStay** is a full-featured web application designed to allow users to list, browse, and review vacation rentals. It serves as a comprehensive platform for property owners to manage their listings and for guests to find and review accommodations.

This project is deployed at [BeyondStay on Render](https://beyondstay.onrender.com).

## Features

- **User Authentication**: Secure user registration, login, and logout using Passport.js with local strategy.
- **Listing Management**: Property owners can create, edit, and delete their listings, complete with image uploads using Multer and Cloudinary.
- **Review System**: Users can leave and delete reviews for listings they have stayed at, with validation to ensure high-quality feedback.
- **Image Upload**: Listings include image upload capabilities, with images stored securely via Cloudinary.
- **Ownership Restrictions**: Only the creator of a listing or review can delete or edit their content. The edit and delete options are only visible to the creator of the listing or review, ensuring privacy and control.
- **Session Management**: Secure session management and persistent logins using express-session and connect-mongo.
- **Flash Messages**: Instant feedback to users on actions performed, such as successful login, signup, or error handling, using connect-flash.
- **Data Validation**: Robust data validation for both listings and reviews using Joi schemas to maintain data integrity.
- **Custom Error Handling**: Enhanced error management with custom ExpressError class and centralized asynchronous error handling using wrapAsync utility.

## Project Structure

### 1. **controllers/**
   - **listing.js**: Manages all operations related to property listings:
     - Display all listings.
     - Create, edit, update, and delete listings.
     - Handle image uploads and updates.
   - **review.js**: Handles all operations related to reviews:
     - Add reviews to specific listings.
     - Delete reviews from listings.
   - **users.js**: Manages user-related operations:
     - User registration, login, and logout.
     - Flash messages for user feedback.

### 2. **models/**
   - **listing.js**: Defines the schema for property listings, including title, description, price, location, and image.
   - **review.js**: Defines the schema for reviews, including rating and comment.
   - **user.js**: Defines the schema for users, with email and password (managed via Passport.js for authentication).

### 3. **routes/**
   - **listing.js**: Routes for managing property listings:
     - View, create, edit, update, and delete listings.
     - Image upload handling for listings.
   - **review.js**: Routes for managing reviews:
     - Add and delete reviews on listings.
   - **user.js**: Routes for managing user operations:
     - Signup, login, and logout.

### 4. **utils/**
   - **ExpressError.js**: Custom error handling class to provide more informative error messages and status codes.
   - **wrapAsync.js**: Utility to streamline asynchronous function error handling, eliminating the need for repetitive try-catch blocks.

### 5. **root files**
   - **index.js**: The main entry point of the application:
     - Sets up the Express server and connects to MongoDB.
     - Configures middleware including session management, authentication, and routing.
     - Handles global error management and initializes the server.
   - **middleware.js**: Contains essential middleware functions:
     - Authentication checks to ensure users are logged in before performing certain actions.
     - Validation middleware for ensuring the integrity of listing and review data.
     - Authorization checks to ensure users can only edit or delete their own content.
   - **schema.js**: Contains Joi schemas for validating the structure and content of listings and reviews.
   - **package.json**: Specifies the project’s dependencies, Node.js version, and other metadata.

## Installation

To set up the BeyondStay application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/beyondstay.git
   ```
2. Navigate into the project directory:
   ```bash
   cd beyondstay
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string and other environment-specific variables:
     ```
     ATLASDB_URL=your_mongodb_connection_string
     SECRET=your_secret_key
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_KEY=your_cloudinary_key
     CLOUDINARY_SECRET=your_cloudinary_secret
     ```
5. Start the development server:
   ```bash
   node index.js
   ```

## Usage

- **Access the application** at `http://localhost:8080` (for local setup) or visit the live site at [BeyondStay on Render](https://beyondstay.onrender.com).
- **Create an account** or log in with existing credentials.
- **Create a new listing** with an image, or browse existing ones.
- **Leave a review** for any listing you've stayed at.
- **Edit or delete** listings and reviews, with controls visible only to the creator.

## Dependencies

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **Passport.js**: Authentication middleware for Node.js.
- **Multer & Cloudinary**: For image upload and storage.
- **Joi**: Data validation library.
- **connect-flash**: Middleware for flash messages.
- **express-session & connect-mongo**: For session management.

## License

This project is licensed under the ISC License.

---

