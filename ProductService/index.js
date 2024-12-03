const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()
const app = express()
const port = process.env.SERVER_PORT;
app.use(express.json())
app.use('/api', require('./products/router'))

mongoose.connect(process.env.MONGO_URI)
    .then((data) => app.listen(port, () => console.log(`DB Connected Successfully , App listening on http://localhost:${port}`)))
    .catch((err) => console.log(err))




