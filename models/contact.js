module.exports = (sequelize, DataTypes) => {
   const Contact =  sequelize.define('Contact', {
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "first"
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "last"
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "email"
        },
        country: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 123456789
        },
    }, {
        tableName: 'contacts',
        createdAt: true,
        updatedAt: true

    });
return Contact;
};