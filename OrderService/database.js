const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./orders.db');

// Initialize database schema
db.serialize(() => {
  db.run(\`
    CREATE TABLE IF NOT EXISTS Orders (
      OrderID INTEGER PRIMARY KEY AUTOINCREMENT,
      UserID INTEGER NOT NULL,
      ProductID INTEGER NOT NULL,
      Quantity INTEGER NOT NULL,
      Status TEXT NOT NULL
    )
  \`);
});

// Create a new order
const createOrder = (userId, productId, quantity, status) => {
  return new Promise((resolve, reject) => {
    const query = \`INSERT INTO Orders (UserID, ProductID, Quantity, Status) VALUES (?, ?, ?, ?)\`;
    db.run(query, [userId, productId, quantity, status], function (err) {
      if (err) reject(err);
      else resolve(this.lastID);
    });
  });
};

// Get orders by user
const getOrdersByUser = (userId) => {
  return new Promise((resolve, reject) => {
    const query = \`SELECT * FROM Orders WHERE UserID = ?\`;
    db.all(query, [userId], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

module.exports = { createOrder, getOrdersByUser };
