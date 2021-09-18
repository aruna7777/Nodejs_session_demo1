module.exports = (sequelize, Sequelize) =>{
    const Userdetails = sequelize.define("userdetail",{
        id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            unique:true,
            primaryKey:true,
            autoIncrement:true
         },
         name_en:{
             type:Sequelize.STRING,
             allowNull:false,
             
         },
         name_si:{
            type:Sequelize.STRING,
            allowNull:false,
            
        },
        name_ta:{
            type:Sequelize.STRING,
            allowNull:false,

        },
         dob:{
            type: Sequelize.DATE,
            allowNull:false,
         },
         salary:{
            type: Sequelize.DECIMAL(10,2),
            allowNull:false,
         },
         special_req:{
            type: Sequelize.TEXT,
            allowNull:false,
         }
    })

    return Userdetails;
}