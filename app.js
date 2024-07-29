const express = require('express');
const morgan = require('morgan');
// const { get } = require('http');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//1) Middleware
// console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json()); //to use middlewhere in express create obj
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 🙋‍♀️');
  next();
});

app.use((req, res, next) => {
  req.requstTime = new Date().toISOString();
  next();
});

//3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//Implementing users routes

//4) START SERVER
module.exports = app;
