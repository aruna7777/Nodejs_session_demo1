const express = require('express');
const router = express.Router();
const userdetailController = require('../controllers/userdetail.controller');


router.get('/', userdetailController.getAllUserDetail );
router.get('/:id', userdetailController.getSingleUserDetail );
router.post('/', userdetailController.createUserDetail );
router.put('/', userdetailController.updateUserDetail );
router.delete('/', userdetailController.deleteUserDetail );


module.exports = router;