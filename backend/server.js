require('dotenv').config();
const cors = require('cors');
const express = require('express');
const DB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT

DB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, console.log(`listening on localhost: ${port}`));