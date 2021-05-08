const express = require('express');
const cors = require('cors');
const v1 = require('./routes/api/v1/');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api', v1());


const port = 5005;
app.listen(port, () => console.log(`Server running on port ${port}`));
