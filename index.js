// common js syntax

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const PORT = 4000; 

const app = express();

app.use('/user', userRoutes)
app.get('/', (req, res) => {
  res.send('Something to display while working w/ db');
});
mongoose.connect('mongodb://localhost/userdb', { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`Example app listen on port ${PORT}`);
})
