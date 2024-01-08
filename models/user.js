module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      firstName: {
        type: DataTypes.STRING,
      
        defaultValue: null
      },
      lastName: {
        type: DataTypes.STRING,
       
        defaultValue: null
      },
      email: {
        type: DataTypes.STRING,
        
        defaultValue: null
      },
      phoneNo: {
        type: DataTypes.INTEGER,
        
        defaultValue: null
      },
    }, {
      tableName: 'users',
      createdAt: true,
      updatedAt: true
    });
  
    return User;
  };
  