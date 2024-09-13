const User = require("../models/User")
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const getAllUsers = async(req,res) =>{
    console.log(req.user)
    const users = await User.find({ role: 'user' }).select('-password -__v');
    res.status(StatusCodes.OK).json({users})
}
const getSingleUser = async(req,res) =>{
    const userId = req.params.id;
    const user = await User.find({_id:userId}).select('-password -__v');
    if(!user){
        throw new CustomError.NotFoundError(`No user with id:${userId}`)
    }
    res.status(StatusCodes.OK).json({user})
}
const showCurrentUser = async(req,res) =>{
    res.status(StatusCodes.OK).json({user:req.user})
}
const updateUser = async(req,res) =>{
    res.send('update user')
}
const updateUserPassword = async(req,res) =>{
    res.send('update user password')
}

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
}