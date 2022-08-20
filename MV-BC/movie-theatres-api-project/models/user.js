const { db, DataTypes } = require('../db/index')

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true       
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    watched: {
        type: DataTypes.JSON
    }
});

module.exports = {
    User
};