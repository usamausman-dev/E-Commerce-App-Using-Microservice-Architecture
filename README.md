User Service:
Endpoints:
- POST /register: Register a new user.
- POST /login: Authenticate a user.
Database Schema: UserID, Username, Password, Email.
Tech Stack: ExpressJS with Supabase - PostgreSQL.

Product Service:
Endpoints:
- GET /products: Fetch all products.
- POST /products: Add a new product.
Database Schema: ProductID, Name, Description, Price, Quantity.
Tech Stack: ExpressJS with MongoDB.

Order Service:
Endpoints:
- POST /orders: Place an order.
- GET /orders/{userId}: Fetch user orders.
Database Schema: OrderID, UserID, ProductID, Quantity, Status.
Tech Stack: ExpressJS with SQLite.

Payment Service:
Endpoints:
- POST /pay: Process payment.
- Simulate success/failure responses. 


