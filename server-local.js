const port = process.env.PORT || 3000;

const app = require('./src/server');

app.listen(port, () => console.log(`Server started on port ${port}.`));
