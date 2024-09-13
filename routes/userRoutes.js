const express = require('express')
const { getAllUsers, getSingleUser, showCurrentUser, updateUser, updateUserPassword } = require('../controllers/userController')
const { authenticateUser, authorizePermissions } = require('../middleware/authentication')
const router = express.Router()

router.get('/',authenticateUser, authorizePermissions, getAllUsers)
router.get('/showMe',showCurrentUser)
router.patch('/updateUser',updateUser)
router.patch('/updateUserPassword',updateUserPassword)
router.get('/:id',authenticateUser,getSingleUser)
module.exports = router