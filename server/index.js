const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const User = require('./model/userModal');
const connectDb = require('./config/dbConnection');
const jwt = require('jsonwebtoken');

app.use(cors())

const port = process.env.PORT
connectDb();

app.use(express.json());

app.post('/api/register', async (req, res) => {
  try {
    const user = await User.create(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
    )
  }
  catch (err) {
    res.json({ status: 'Error', user: false })
  }
})

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  })

  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email
      },
      'secret123'
    )
    res.json({ status: 'ok', user: token })
  }
  else {
    res.json({ status: 'error', user: false })
  }
})

app.listen(port, () => {
  console.log(`Server is Running on ${port}`)
})

//31.54