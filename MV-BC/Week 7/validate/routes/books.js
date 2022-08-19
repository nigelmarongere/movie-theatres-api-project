const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

let books = [
    {
        title: 'The Republic',
        author: 'Plato'
    },
    {
        title: 'The Road to Wigan Pier',
        author: 'George Orwell'
    },
    {
        title: 'Atomic Habits',
        auther: 'James Clear'
    }
];

router.get('/', (req, res) => {
    res.sendStatus(200);
})

const validate = [
    check('title').not().isEmpty().trim()
];

router.post('/return', validate, (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({error: errors.array()});
    }
    books.push(req.body);
    console.log(books);
    res.sendStatus(200);
});

module.exports = router;