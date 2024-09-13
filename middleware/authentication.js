const CustomError = require('../errors')

const {isTokenValid} = require('../utils')

const authenticateUser = async(req,res,next) =>{
    const token = req.signedCookies.token
    if(!token){
        throw new CustomError.UnauthenticatedError('Autehentication Invalid')
    }
    try {
        const payload = isTokenValid({token});
        req.user = {name:payload.name,userId:payload.userId,role:payload.role}
        next()
    } catch (error) {
        throw new CustomError.UnauthenticatedError('Autehentication Invalid')
    }
}

const authorizePermissions = async (req,res,next) =>{
    if(req.user.role !== 'admin'){
        throw new CustomError.UnauthorizedError('Unathorized to acces this route')
    }
    next();
}

module.exports = {
    authenticateUser,
    authorizePermissions,
}