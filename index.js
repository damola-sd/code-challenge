const app = require('./server');

const port = 5005;
app.listen(port, () => console.log(`Server running on port ${port}`));