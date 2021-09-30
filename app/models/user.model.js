const { sequelize, Sequelize } = require(".");

module.exports = (sequelize,Sequelize) => {
    const User = sequelize.define("user",{
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type:Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        password:{
            type:Sequelize.STRING,
            allowNull: false, 
        },
        status:{
            type: Sequelize.ENUM,
            values: ['active', 'pending', 'deleted'],
            defaultValue:"active",
            allowNull:false,

         }
    })

    return User;
}