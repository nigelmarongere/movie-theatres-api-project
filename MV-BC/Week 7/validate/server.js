const express = require('express');
const app = express();
const books = require('./routes/books');
const port = 3000;

app.use(express.json());
app.use('/books', books);

app.get('/', (req, res) => {
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`server is up and live on http://localhost:${port}`)
})