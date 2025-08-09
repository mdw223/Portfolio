const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

//an Endpoint to send the API Key
// app.get('/api/youtube-api-key', (req, res) => {
//   const key = process.env.YouTube_Api_Key;
//   res.json({ apiKey: key });
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

