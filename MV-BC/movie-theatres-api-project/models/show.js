const { db, DataTypes } = require('../db/index');

const Show = db.define('Show', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true    
    },
    title: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    rating: {
        type: DataTypes.INTEGER
    }
});

module.exports = {
    Show
};