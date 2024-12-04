
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

### Setup
- Install dependencies: `npm install`
- Start the service: `npm start` (Runs on port 5003 by default).

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

### Setup
- Environment variables required: `MONGO_URI`, `SERVER_PORT`.
- Install dependencies: `npm install`
- Start the service: `npm start` (Runs on the port specified in `.env`).

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

### Setup
- Environment variables required: `SUPABASE_URL`, `SUPABASE_KEY`, `PORT`.
- Install dependencies: `npm install`
- Start the service: `npm start` (Runs on the port specified in `.env`).

---

## General Notes
- Ensure that the required databases and environment variables are properly configured before starting each service.
- Use a REST client like Postman to test API endpoints.

### Directory Structure
Each service has its own directory with the following structure:
```
ServiceName/
├── app/index.js
├── controller/database.js
├── model.js (if applicable)
├── routes.js (if applicable)
├── package.json
```

---

**Author**: [Your Name]
