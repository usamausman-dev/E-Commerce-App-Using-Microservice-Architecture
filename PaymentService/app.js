const express = require('express');
const db = require('./database');
const app = express();

app.use(express.json());

// Process payment and update order status
app.post('/pay', async (req, res) => {
  const { orderId, status } = req.body;

  try {
    await db.updateOrderStatus(orderId, status);
    res.status(200).json({ message: 'Payment processed and order status updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process payment' });
  }
});

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`Payment Service running on port ${PORT}`));
