const {db} = require('./index');
const {showData, userData} = require('./seedData');
const {Show, User} = require('../models/index');

let populateDataBase = async () => {
    await db.sync({ force: true });
    await Promise.all(showData.map((c) => {Show.create(c)}));
    await Promise.all(userData.map((c) => {User.create(c)}));
};

let buildDb = async () => {
    await populateDataBase();
};

module.exports = {
    buildDb
};