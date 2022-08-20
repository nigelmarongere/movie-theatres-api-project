const express = require('express');
const router = express.Router();
const {Show, User} = require('../models/index');

router.get('/', (req, res) => {
    res.sendStatus(200)
});

/*
GET
*/ 

// All shows
router.get('/all', async (req, res) => {
    res.status(200).send(await Show.findAll());
});

// One show
router.get('/:show', async (req, res) => {
    res.status(200).send(await Show.findOne({where: {title: req.params.show}}));
});

// Shows of a specific genre
router.get('/genre/:genre', async (req, res) => {
    res.status(200).send(await Show.findAll({where: {genre: req.params.genre}}));
});

/*
PUT
*/

// Update the status of a show
// localhost:3000/shows/status?title=500 Days of Summer&status=unavailable
// req.query === { title: '500 Days of Summer', status: 'unavailable' }

router.put('/status', async (req, res) => {
    const {title, status} = req.query;
    await Show.update({status: status}, {where: {title: title}});
    res.sendStatus(200);
});

// Update the rating of a show
// localhost:3000/shows/rating?title=The Godfather&rating=4
// req.query === { title: 'The Godfather', rating: '4' }

router.put('/rating', async (req, res) => {
    const {title, rating} = req.query;
    await Show.update({rating: parseInt(rating)}, {where: {title: title}});
    res.sendStatus(200);
});

/*
DELETE
*/

// One show
// localhost:3000/shows/delete?title=The Social Network
// req.query === { title: 'The Social Network' }
router.delete('/delete', async (req, res) => {
    const {title} = req.query;
    await Show.destroy({where: {title: title}});
    res.sendStatus(200);
})

module.exports = router;