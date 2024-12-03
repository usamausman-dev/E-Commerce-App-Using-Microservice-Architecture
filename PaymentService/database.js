const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./orders.db');

// Initialize database schema (shared with OrderService)
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

// Update order status
const updateOrderStatus = (orderId, status) => {
  return new Promise((resolve, reject) => {
    const query = \`UPDATE Orders SET Status = ? WHERE OrderID = ?\`;
    db.run(query, [status, orderId], function (err) {
      if (err) reject(err);
      else resolve();
    });
  });
};

module.exports = { updateOrderStatus };
