const db =require('../models')
const Role = db.role;

exports.getAllRole = (req, res)=>{
    Role.findAll()
    .then(data =>{
        if (data.length != 0) {
            // res.status(200).send(data);
            res.status(200).send('success');
        } else {
            res.status(401).send('Roles are empty');
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Not Found'
        });
    });
    }

exports.getSingleRole = (req, res)=>{

    const id = req.params.id;

    Role.findByPk(id)
        .then(data => {
            if (data.length != 0) {
                // res.status(200).send(data);
                res.status(200).send('Success');
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
    // res.status(200).send(' get Single Role  Success')
}
exports.createRole = (req, res)=>{
    res.status(200).send('Successfuly create a role');
    
}

exports.updateRole = (req, res)=>{
    res.status(200).send(' Successfuly update a role')
}

exports.deleteRole = (req, res)=>{
    res.status(200).send('Successfuly delete a role')
}