const {Show} = require('./show');
const {User} = require('./user');

Show.belongsToMany(User, {through: 'UserShows'});
User.belongsToMany(Show, {through: 'UserShows'});

module.exports = {
    Show,
    User
}