
module.exports = (sequelize, Sequelize) =>{
    const Role = sequelize.define("role",{
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true
         },
         role_name:{
             type:Sequelize.STRING,
             allowNull: false,
         },
         status:{
            type: Sequelize.ENUM,
            values: ['active', 'pending', 'deleted'],
            defaultValue:"active",
            allowNull: false,
         }
    })
    return Role;
}