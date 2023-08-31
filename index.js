const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

const numbersRouter = require('./routes/numbers');
const homeRouter = require('./routes/home');
const historyRouter = require('./routes/history');

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/',homeRouter);
app.use('/numbers', numbersRouter);
app.use('/history',historyRouter);

app.listen(port, () => {
    console.log(`Kalvium backend listening at http://localhost:${port}`)
  })