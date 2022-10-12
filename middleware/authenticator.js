const jwt = require('jsonwebtoken')
const User = require('../models/user')

exports.authenticator = (req,res,next)=> {
    try{
const token = req.header('Authorization')
const user = jwt.verify(token,'asdf1234')
console.log('hey hey hey hey hey ', user.userid)
User.findByPk(user.userid)
.then(user=>{
    req.user = user
    // console.log(user)
    next()
})
    }
    catch(err){
console.log(err)
return res.json({err,success:false})
    }
}