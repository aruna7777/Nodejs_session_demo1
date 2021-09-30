 const dbConfig = require("../config/db.config");
 const Sequelize = require("sequelize");
 const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,
     {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false,
        port:3308,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
     }

 );

 const db = {};
 db.Sequelize = Sequelize;
 db.sequelize = sequelize;

 sequelize
     .authenticate()
     .then(()=>{
         console.log('Connection has been established successfully.');
     })
     .catch(err=>{
         console.error('Unable to connect to tha database:',err);
     }) 

     db.user = require("./user.model")(sequelize,Sequelize);
     db.role = require("./role.model")(sequelize,Sequelize);
     db.userdetail = require("./userdetail.model")(sequelize,Sequelize);
     db.vehicle = require("./vehicle.model")(sequelize,Sequelize);

    // Many to Many relationship (user-role)
    db.user.belongsToMany(db.role,{
        through: "user_role",
        as: "roles",
        foreignKey: "role_id"
    });
    db.role.belongsToMany(db.user,{
        through: "user_role",
        as: "users",
        foreignKey: "user_id"
      });
  
    //   one to many 
      db.user.hasMany(db.vehicle, {});
      db.vehicle.belongsTo(db.user);

    //  one to one
    db.user.hasOne(db.userdetail, {});
    db.userdetail.belongsTo(db.user);
     

module.exports = db;