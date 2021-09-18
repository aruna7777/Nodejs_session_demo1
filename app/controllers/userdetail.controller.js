const db =require('../models')
const UserDetail = db.userdetail;

exports.getAllUserDetail = (req, res)=>{
    UserDetail.findAll()
    .then(data =>{
        if (data.length != 0) {
            res.status(200).send(data);
        } else {
            res.status(401).send('User details are empty');
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Not Found'
        });
    });
    }

exports.getSingleUserDetail = (req, res)=>{
    const id = req.params.id;

    UserDetail.findByPk(id)
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
    // res.status(200).send(' get Single UserDetail  Success')
}
exports.createUserDetail = (req, res)=>{
    res.status(200).send('Successfuly create a user');
    
}

exports.updateUserDetail = (req, res)=>{
    res.status(200).send('Successfuly update a user')
}

exports.deleteUserDetail = (req, res)=>{
    res.status(200).send('Successfuly delete a user')
}