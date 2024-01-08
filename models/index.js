const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'mysql',
    logging: false,
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'sequelize',
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });


const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.contact = require("./contact")(sequelize, DataTypes)
db.user = require("./user")(sequelize, DataTypes)
db.sequelize.sync({ force: false });
module.exports = db;