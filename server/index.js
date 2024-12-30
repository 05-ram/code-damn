const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors')

app.use(cors())

const port = process.env.PORT

app.use(express.json());

app.post('/api/register', (req, res) => {
    console.log(req.body)
    res.json({ status: "ok" })
})

app.listen(port, () => {
    console.log(`Server is Running on ${port}`)
})