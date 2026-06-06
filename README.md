# WanderStay (Airbnb Clone)

WanderStay is a modern web application designed to clone the core functionalities of Airbnb. It provides travelers and hosts a platform to discover, list, and review properties worldwide. The platform features user authentication, image uploads, interactive maps, and schema validations.

---

## 🚀 Key Features

*   **Property CRUD Operations**: Create, read, update, and delete listings. Each listing includes images, descriptions, pricing, and locations.
*   **Review System**: Guests can rate listings (1-5 stars) and write comments. Authors can delete their own reviews.
*   **Secure Authentication**: User registration, login, and logout. Protected routes ensure only authorized users can modify listings and reviews.
*   **Interactive Maps**: Automatically converts addresses to map coordinates and displays property locations with custom markers.
*   **Media Uploads**: Allows hosts to upload property photographs directly during listing creation or editing.

---

## 🛠️ Tech Stack & Key Terms Explained

This project is built using a modern **MEN (MongoDB, Express, Node)** stack with EJS layouts and Bootstrap styling. Below is an explanation of the core technical terms and libraries powering the application:

### 🧩 Core Architecture & Frameworks
*   **Node.js**: An open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser, running the backend server.
*   **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications, handling routes and HTTP requests.
*   **MVC (Model-View-Controller)**: An architectural software pattern that separates an application into three main logical components:
    *   **Model**: Represents the data structures (e.g., `models/listing.js`) and interacts with the database.
    *   **View**: Handles the user interface and presentation layer (e.g., `.ejs` templates).
    *   **Controller**: Contains the business logic that handles requests, updates models, and renders views (e.g., `controllers/listings.js`).
*   **REST (Representational State Transfer)**: An architectural design style for mapping database CRUD actions to standard HTTP verbs (e.g., `GET` to read, `POST` to create, `PUT` to update, and `DELETE` to remove resources).

### 🗄️ Database & State Management
*   **MongoDB**: A document-based, NoSQL database where data is stored in flexible, JSON-like documents rather than tables.
*   **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js. It defines schemas, runs validations, and simplifies database queries.
*   **Express-Session**: Middleware that stores session data on the server and sends a unique session ID cookie to the client browser to maintain user sessions.
*   **Connect-Mongo**: A session store that saves session data directly inside MongoDB instead of local memory. This ensures sessions persist even if the server restarts.
*   **Connect-Flash**: A special area of the session used for storing temporary messages (e.g., "New Listing Created!") which are cleared once displayed to the user.

### 🔐 Authentication & Validation
*   **Passport.js**: An authentication middleware for Node.js. It simplifies user logins and authentication strategies (like local username/password or OAuth).
*   **Passport Local Mongoose**: A Mongoose plugin that automatically adds salt, hash, and username fields to the User schema, handling password encryption and validation automatically.
*   **Joi**: A schema description language and data validator for JavaScript. It verifies that incoming request bodies (`req.body`) contain valid data formats before saving them to MongoDB (e.g., checking if price is a positive number).

### 🗺️ APIs & External Integrations
*   **Mapbox GL JS**: An interactive web mapping library that uses WebGL to render maps with custom markers and popups on the front end.
*   **Forward Geocoding**: The process of converting a written address (e.g., "Paris, France") into latitude and longitude coordinates (`[lng, lat]`) so they can be plotted on a map.
*   **Multer**: Node.js middleware for parsing `multipart/form-data` payloads, primarily used for uploading files like property images.
*   **Cloudinary & Multer-Storage-Cloudinary**: Cloudinary is a cloud service for storing, managing, and transforming images. The multer-storage plugin streams files directly from the browser to Cloudinary and returns a remote URL to save in MongoDB.

### 🎨 Rendering & Interface
*   **EJS (Embedded JavaScript Templates)**: A templating engine that generates HTML markup dynamically using vanilla JavaScript on the server.
*   **EJS-Mate**: A layout engine extension for EJS that supports boilerplate layouts, blocks, and partials. It allows child views to inherit layout code (like headers and footers) seamlessly.
*   **Bootstrap 5**: A popular, mobile-first CSS framework used to build responsive grids, components, and form designs across the application.

---

## 📂 Directory Structure

A visual map of the project files:

```text
WanderStay/
├── controllers/          # Business logic handlers (MVC Controller)
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── init/                 # Database initialization and seeding scripts
│   ├── data.js
│   └── index.js
├── models/               # Mongoose database models (MVC Model)
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/               # Client-side static assets
│   ├── css/
│   │   ├── rating.css    # Star-ability rating widget styles
│   │   └── style.css     # Custom global stylesheets
│   └── js/
│       ├── map.js        # Mapbox client-side mapping script
│       └── script.js     # Form validation constraints
├── routes/               # Express routing tables
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/                # Helper utilities and error wrappers
│   ├── ExpressError.js
│   └── wrapAsync.js
├── views/                # EJS templates (MVC View)
│   ├── includes/         # Partial templates (navbar, footer, flash alerts)
│   ├── layouts/
│   │   └── boilerplate.ejs # Main HTML layout wrapper
│   ├── listings/         # Listing views (index, show, edit, new)
│   ├── users/            # Authentication forms (login, signup)
│   └── error.ejs         # Global error response template
├── .env                  # Local environment variables config (ignored in Git)
├── app.js                # Core server configuration and initialization
├── cloudConfig.js        # Cloudinary file storage driver setup
├── middleware.js         # Security and validation middlewares
├── package.json          # Dependency packages definitions
└── schema.js             # Joi validation rules definition
```

---

## ⚙️ Setup & Installation

### 📋 Prerequisites
Make sure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/) (v22.12.0 or compatible)
*   [MongoDB](https://www.mongodb.com/try/download/community) (Local Server running on `127.0.0.1:27017` or a MongoDB Atlas URI)

### 📥 Step 1: Install Dependencies
Clone this repository to your local machine, open your terminal in the directory, and run:
```bash
npm install
```

### 🔑 Step 2: Environment Configuration
Create a `.env` file in the root directory of your project and populate it with your API tokens and credentials:
```env
# MongoDB Atlas Database URI (or your local database path)
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/wanderstay?retryWrites=true&w=majority

# Express Session Encryption Secret
SECRET=yoursupersecretstringhere

# Cloudinary Credentials (for image uploads)
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# Mapbox Token (for geocoding and rendering maps)
MAP_TOKEN=your_mapbox_public_access_token
```
> [!WARNING]
> Do not commit the `.env` file to your Git repository. It contains private access credentials.

### 🌱 Step 3: Seed the Database
Before running the application, you can seed your database with sample listing data. Run the following command:
```bash
node init/index.js
```
This script will clear all existing properties and populate MongoDB with default properties mapped to default coordinates and mock user relationships.

### 🚀 Step 4: Run the Application
Start the Node.js server with:
```bash
node app.js
```
Once started, open your web browser and navigate to:
```text
http://localhost:8080/listings
```

---

## 🛣️ API Route Reference

Below is a reference of the active application routes:

| Route Path | Method | Middleware | Controller Action | Description |
| :--- | :---: | :--- | :--- | :--- |
| `/listings` | `GET` | None | `listings.index` | Display list of all listings |
| `/listings` | `POST` | `isLoggedIn`, `upload.single`, `validateListing` | `listings.createListing` | Create new listing, save image to Cloudinary, and geocode address |
| `/listings/new` | `GET` | `isLoggedIn` | `listings.renderNewForm` | Show form to create new property listing |
| `/listings/:id` | `GET` | None | `listings.showListing` | Display detailed info of a single listing with reviews & map |
| `/listings/:id` | `PUT` | `isLoggedIn`, `isOwner`, `upload.single`, `validateListing` | `listings.updateListing` | Update fields/images of an existing listing |
| `/listings/:id` | `DELETE` | `isLoggedIn`, `isOwner` | `listings.destroyListing` | Delete listing and its associated reviews |
| `/listings/:id/edit` | `GET` | `isLoggedIn`, `isOwner` | `listings.renderEdit` | Show edit form for listing |
| `/listings/:id/reviews` | `POST` | `isLoggedIn`, `validateReview` | `reviews.createReview` | Create and associate a new review to a listing |
| `/listings/:id/reviews/:reviewId`| `DELETE`| `isLoggedIn`, `isReviewAuthor` | `reviews.destroyReview` | Delete a review and remove reference from listing |
| `/signup` | `GET` | None | `users.renderSignupForm` | View user sign-up form |
| `/signup` | `POST` | None | `users.signup` | Register new user and log them in |
| `/login` | `GET` | None | `users.renderLoginForm` | View login form |
| `/login` | `POST` | `saveRedirectUrl`, `passport.authenticate` | `users.login` | Authenticate user credentials and redirect |
| `/logout` | `GET` | None | `users.logout` | Log current user session out |
