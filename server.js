const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require("./app/models/index");

// Routes
const userRoute=require('./app/routes/user.route');
const roleRoute=require('./app/routes/role.route');
const userdetailRoute=require('./app/routes/userdetail.route');
const vehicleRoute=require('./app/routes/vehicle.route');
const authRoute = require('./app/routes/auth.route');

// Middleware
const {veryfyToken}=require('./app/middlewares/auth.middleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());  

db.sequelize.sync({ force: false })
    .then(()=>{
        console.log('Database and tables created!');
    });

app.use('/user',userRoute);
app.use('/role',veryfyToken,roleRoute);
app.use('/userdetail',veryfyToken,userdetailRoute);
app.use('/vehicle',veryfyToken,vehicleRoute);
app.use('/auth',authRoute);
 
const PORT = 3003;
app.listen(PORT,()=>{
    console.log(`Server is runninig on ${PORT}`);
});