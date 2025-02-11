const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pollRoutes = require('./routes/poll');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/poll', pollRoutes);

db.connect();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
