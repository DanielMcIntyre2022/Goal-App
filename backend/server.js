require('dotenv').config();
const express = require('express');
const DB = require('./config/db')
const port = process.env.PORT

DB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, console.log('listening on localhost 3023'));