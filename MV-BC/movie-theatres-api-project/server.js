const express = require('express');
const server = express();
const shows = require('./routes/shows');
const users = require('./routes/users');
const port = 3000;
const {buildDb} = require('./db/populateDataBase');

server.get('/', (req, res) => {
    res.sendStatus(200)
});

server.use(express.json());
server.use('/shows', shows);
server.use('/users', users);

server.listen(port, async () => {
    await buildDb();
    console.log(`server is live and listening at http://localhost:${port}`)
});
