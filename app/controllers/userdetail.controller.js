const db = require('../models')
const Userdetail = db.userdetail;

exports.getAllUserDetail=(req,res)=>{
    Userdetail.findAll()
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

exports.getSingleUserDetail=(req,res)=>{
    const id = req.params.id;
    Userdetail.findByPk(id)
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

exports.createUserDetail= async (req,res)=>{
    const userdetail = {
        username: req.body.username,
        password: req.body.password,
        status: req.body.status,
    }
    await Userdetail.create(userdetail)
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

exports.updateUserDetail= async (req,res)=>{
    const userdetail = {
        username: req.body.username,
        password: req.body.password,
        status: req.body.status,
    }
    await Userdetail.update(
        userdetail, {
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
