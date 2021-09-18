const express =require("express");
const cors =require('cors');
const cookieParser =require('cookie-parser');
const db =require("./app/models/index");
const userRoute = require('./app/routes/user.route');
const roleRoute = require('./app/routes/role.route');
const userdetailRoute = require('./app/routes/userdetail.route');
const vehicleRoute = require('./app/routes/vehicle.route');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());


db.sequelize.sync({ force: false }).then(() => {
    console.log(`Database & tables created!`);
  });

app.get("/",(req,res)=>{
    res.send("Welcome to my first node.js API");
});

app.use('/user', userRoute);
app.use('/role', roleRoute);
app.use('/userdetail', userdetailRoute);
app.use('/vehicle', vehicleRoute);
const PORT=3003;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);

});