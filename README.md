# Car Inventory Management API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Live URL

[https://your-live-url.com](https://your-live-url.com) (Replace with your actual deployed URL)

## Description

This is a RESTful API built with Node.js, Express, and Mongoose for managing a car inventory. It provides endpoints for creating, retrieving, updating, and deleting car records. The API also includes features for managing orders and calculating revenue.

## Features

*   **Car Management:**
    *   Create new car listings.
    *   Retrieve all cars with optional search and filtering.
    *   Retrieve a specific car by ID.
    *   Update existing car information.
    *   Delete car listings.
*   **Order Management:**
    *   Place orders for cars.
    *   Automatically update car inventory upon order placement.
    *   Handle insufficient stock scenarios.
*   **Revenue Calculation:**
    *   Calculate total revenue from all orders.

## Technologies Used

*   [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
*   [Express](https://expressjs.com/) - Web framework for Node.js
*   [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool
*   [MongoDB](https://www.mongodb.com/) - NoSQL database
*   [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript that adds static typing
*   [cors](https://github.com/expressjs/cors) - CORS middleware for Express.js
*   [dotenv](https://github.com/motdotla/dotenv) - Loads environment variables from .env file

## API Endpoints

### Car Management

*   `POST /api/cars/car-add`: Create a new car.
    *   Request Body:
        ```json
        {
          "brand": "Toyota",
          "model": "Camry",
          "year": 2023,
          "price": 25000,
          "category": "Sedan",
          "description": "A reliable and fuel-efficient sedan.",
          "quantity": 10,
          "inStock": true
        }
        ```
    *   Response:
        ```json
        {
          "message": "Car created successfully",
          "success": true,
          "data": { ... }
        }
        ```
*   `GET /api/cars`: Retrieve all cars (supports search using query parameters).
    *   Query Parameters:
        *   `searchTerm`: Field to search in (e.g., `brand`, `model`).
        *   `searchValue`: Value to search for.
    *   Response:
        ```json
        {
          "message": "Car retrieved successfully",
          "success": true,
          "data": [ ... ]
        }
        ```
*   `GET /api/cars/:carId`: Retrieve a car by ID.
    *   Response:
        ```json
        {
          "message": "Car retrieved successfully",
          "success": true,
          "data": { ... }
        }
        ```
*   `PUT /api/cars/:carId`: Update a car by ID.
    *   Request Body: (Fields to update)
        ```json
        {
          "price": 27000,
          "inStock": false
        }
        ```
    *   Response:
        ```json
        {
          "message": "Car updated successfully",
          "success": true,
          "data": { ... }
        }
        ```
*   `DELETE /api/cars/:carId`: Delete a car by ID.
    *   Response:
        ```json
        {
          "message": "Car deleted successfully",
          "success": true,
          "data": {}
        }
        ```

### Order Management

*   `POST /api/orders`: Create a new order.
    *   Request Body:
        ```json
        {
          "email": "customer@example.com",
          "car": "648a45e5f0123c45678d9012",
          "quantity": 1,
          "totalPrice": 27000
        }
        ```
    *   Response:
        ```json
        {
          "message": "Order created successfully",
          "status": true,
          "data": { ... }
        }
        ```

### Revenue Calculation

*   `GET /api/revenue`: Calculate total revenue.
    *   Response:
        ```json
        {
          "message": "Revenue retrieved successfully",
          "success": true,
          "data": {
            "totalRevenue": 1234567
          }
        }
        ```

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v16 or higher)
*   [npm](https://www.npmjs.com/) (Node Package Manager)
*   [MongoDB](https://www.mongodb.com/) (Install locally or use a cloud-based service like MongoDB Atlas)

### Installation

1.  Clone the repository:

    ````bash
    git clone [https://github.com/your-username/your-repo.git](https://github.com/your-username/your-repo.git)
    ````

2.  Navigate to the project directory:

    ````bash
    cd your-repo
    ````

3.  Install dependencies:

    ````bash
    npm install
