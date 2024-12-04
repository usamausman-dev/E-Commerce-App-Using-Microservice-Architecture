const express = require('express');
const userRoutes = require('./userRoutes');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/user', userRoutes);
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
