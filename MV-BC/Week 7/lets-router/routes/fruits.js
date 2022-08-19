const express = require('express');
const router = express.Router();

fruits = [
    {
        name: 'Banana',
        colour: 'Yellow'
    },
    {
        name: 'Orange',
        colour: 'Orange'
    },
    {
        name: 'Pear',
        colour: 'Green'
    }        
];

router.get('/', (req, res) => {
    res.sendStatus(200);
})

router.get('/all-fruits', (req, res) => {
    res.send(fruits);
});

router.get('/get/:fruit', (req, res) => {
    res.send(fruits.filter(fruit => fruit.name === req.params.fruit));
});

router.post('/add', (req, res) => {
    fruits.push(req.query);
    res.send(fruits[fruits.length - 1]);
});

router.put('/update/:id', (req, res) => {
    let index = parseInt(req.params.id) - 1;
    fruits.splice(index, 1, req.body);
    res.send(fruits);
});

router.delete('/delete/:id', (req, res) => {
    let index = parseInt(req.params.id - 1);
    fruits.splice(index, 1);
    res.send(fruits);
})

module.exports = router;