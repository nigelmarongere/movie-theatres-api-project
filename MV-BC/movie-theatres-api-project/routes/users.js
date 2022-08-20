const express = require('express');
const router = express.Router();
const {Show, User} = require('../models/index');

router.get('/', (req, res) => {
    res.sendStatus(200)
});

/*
GET
*/ 

// All users
router.get('/all', async (req, res) => {
    res.status(200).send(await User.findAll());
});

// One user
router.get('/:user', async (req, res) => {
    res.status(200).send(await User.findOne({where: {username: req.params.user}}));
});

// Shows watched by one user
router.get('/watched/:user', async (req, res) => {
    const user = await User.findOne({where: {username: req.params.user}});
    res.send(user['dataValues'].watched);
})

/*
PUT
*/

// Update to add a show if a users watched it
// localhost:3000/users/watch?username=plato&title=The Matrix
// req.query === { username: 'plato', title: 'The Matrix' }

router.put('/watch', async (req, res) => {
    const {username, title} = req.query;
    const user = await User.findOne({where: {username: username}});
    const show = await Show.findOne({where: {title: title}});
    // Add show to UserShows junction table
    await user.addShow(show);
    // Add show to user {"watched": JSON} property
    let object = await JSON.parse(user['dataValues'].watched);
    object.push({"title": title});
    let json = JSON.stringify(object);
    await User.update({watched: json}, {where: {username: username}});
    res.send(user['dataValues'].watched);
});


module.exports = router;