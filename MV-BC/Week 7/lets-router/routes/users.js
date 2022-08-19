const express = require('express');
const router = express.Router();

let users = [
    {
        name: 'Socrates',
        age: 71
    },    
    {
        name: 'Plato',
        age: 80
    },
    {
        name: 'Aristotle',
        age: 62
    }        
];

router.get('/', (req, res) => {
    res.sendStatus(200);
});

router.post('/', (req, res) => {
    users.push(req.body);
    console.log(users);
    res.sendStatus(200);
})

router.get('/all-users', (req, res) => {
    res.send(users);
})

router.get('/get/:user', (req, res) => {
    res.send(users.filter(user => user.name === req.params.user));
} );

router.post('/add', (req, res) => {
    users.push(req.query);
    res.send(users[users.length - 1]);
});

router.put('/update/:id', (req, res) => {
    let index = parseInt(req.params.id) - 1;
    users.splice(index, 1, req.body);
    res.send(users);
});

router.delete('/delete/:id', (req, res) => {
    let index = parseInt(req.params.id - 1);
    users.splice(index, 1);
    res.send(users);
})

module.exports = router;