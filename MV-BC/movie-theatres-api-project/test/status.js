const {buildDb} = require('../db/populateDataBase');
const {Show, User} = require('../models/index');

// test status via M : M association
async function testStatus(){
    await buildDb();

    const user1 = await User.findOne({where: {username: 'socrates'}});
    const user2 = await User.findOne({where: {username: 'plato'}});

    const show1 = await Show.findOne({where: {title: 'Blade Runner 2049'}});
    const show2 = await Show.findOne({where: {title: 'Call Me by Your Name'}});

    // user1 & user2 view show1
    await show1.addUser(user1);
    await show1.addUser(user2);

    // show2 viewed by user1 & user2
    await user1.addShow(show2);
    await user2.addShow(show2);
};

testStatus();