require('dotenv').config();
const db = require('../models')
const User = db.user;
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getAllUser=(req,res)=>{ 
    User.findAll()
    .then(data =>{
        if (data.length != 0) {
            res.status(200).send(data);
        } else { 
            res.status(401).send('Users are empty');
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Not Found'
        });
    });
}

exports.getSingleUser=(req,res)=>{
    const id = req.params.id;
    User.findByPk(id)
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send('User is empty');;
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });

}

exports.createUser= async (req,res)=>{
    //validations
    if(!req.body.username || !req.body.password){
        res.status(404)
        .send({
            status:false,
            message:"Email and Password can't be empty."
        });
    }


    const password= req.body.password;
    const encryptedPassword = await bcrypt.hash(password,saltRounds);


    const user = {
        username: req.body.username,
        password: encryptedPassword,
        status: req.body.status,
    }
    await User.create(user)
        .then(data => {
            // if (data.length != 0) {
            //     res.status(200).send(data);
            // } else {
            //     res.status(404);
            // }
            res.status(200).send({
                status:true,
                message:'Success'
            });
        })
        .catch(err => {
            res.status(500).send(
                {
                    status:false,
                    message: err.message || 'Error occurs creating the user'
                }
            );
        });

}

exports.updateUser= async (req,res)=>{
    const user = {
        username: req.body.username,
        password: req.body.password,
        status: req.body.status,
    }
    await User.update(
        user, {
        where: { id: req.body.id, }})
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });

}
exports.deleteUser=(req,res)=>{
    res.status(200).send('Delete  Success')
}
