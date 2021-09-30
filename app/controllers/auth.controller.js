require('dotenv').config();
const jwt=require('jsonwebtoken');
const db = require('../models')
const bcrypt = require('bcrypt');
const User = db.user;
const saltRounds = 10;

const generateAccessToken=(uid)=>{
    const accessToken=jwt.sign({ id:uid },process.env.JWT_ACCESS_SECRET,{expiresIn:process.env.JWT_ACCESS_TIME} );
    return accessToken;
}


exports.signIn = async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    try{
        await User.findOne({ where:{ username:username}})
            .then(data=>{
                //TODO check data is null
                bcrypt.compare(password,data.password,function(err,result)
                {
                    if(result==true){
                        //password is matching
                        //JWT token send as response
                        const accessToken=generateAccessToken(data.id);
                        res.send({
                            id:data.id,
                            username:data.username,
                            access_token:accessToken,
                        });
                    }else{
                        // password not
                        res.status(401)
                            .send({
                                status:false,
                                message:"Password not valid" +err
                            });
                    }
                });
            })
            .catch(err=>{
                res.status(402)
                    .send({
                        status:false,
                        message:"Username not valid"+err
                    });
            });
    }catch(error){
        res.status(403)
            .send({
                status:false,
                message:"Password or Username not valid."
            });
    }
}