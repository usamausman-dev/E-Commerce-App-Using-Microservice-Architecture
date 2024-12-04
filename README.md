
# Microservices Architecture

This project consists of three microservices: **OrderService**, **ProductService**, and **UserService**. Each service is responsible for managing a specific domain in the application.

---

## 1. OrderService

### Overview
The **OrderService** handles operations related to user orders, such as creating, retrieving, and updating order statuses.

### Technologies Used
- **Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Database**: SQLite

### Endpoints
- **POST `/orders`**: Create a new order.
- **GET `/orders/:userId`**: Retrieve all orders for a user.
- **PUT `/orders/:orderId/pay`**: Update the order status to "Paid".

### Directory Structure
```
OrderService/
├── app.js         # Main server file
├── database.js    # SQLite database operations
├── package.json   # Node.js dependencies and scripts
```

---

## 2. ProductService

### Overview
The **ProductService** manages products, including retrieving all products, adding new ones, and fetching details of specific products.

### Technologies Used
- **Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Database**: MongoDB

### Endpoints
- **GET `/api/all-products`**: Retrieve all products.
- **GET `/api/product/:_id`**: Retrieve a product by ID.
- **POST `/api/products`**: Add a new product.

### Directory Structure
```
ProductService/
├── index.js         # Main server file
├── router.js        # Defines routes for product-related operations
├── controller.js    # Implements logic for product operations
├── model.js         # MongoDB schema for products
├── package.json     # Node.js dependencies and scripts
```

---

## 3. UserService

### Overview
The **UserService** manages user accounts, including registration and login functionality.

### Technologies Used
- **Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Database**: Supabase (PostgreSQL)

### Endpoints
- **POST `/user/register`**: Register a new user.
- **POST `/user/login`**: Authenticate a user.

### Directory Structure
```
UserService/
├── index.js           # Main server file
├── userRoutes.js      # Defines user-related routes
├── userController.js  # Implements logic for user operations
├── db.js              # Supabase database connection
├── package.json       # Node.js dependencies and scripts
```

---

## General Notes
- Ensure that the required databases and environment variables are properly configured before starting each service.
- Use a REST client like Postman to test API endpoints.

---

## Author Details
- **Name**: Muhammad Osama
- **University**: Fast - NUCES Karachi Campus
- **ID**: 23K-7800
