require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT;
const url = process.env.API_URL;

app.use(cors());

app.get('/proxy', async (req, res) => {
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
})

app.listen(port, () => {
  console.log(`Proxy server running on port : ${port}`)
})
