const User = require('../models/user.js')
const bcrypt=require('bcrypt');
const saltround=10;
exports.signup = async(req,res,next)=>{
   
    let userDetails = req.body

    let existingUser = await User.findAll({where:{email: userDetails.email}})
    

    if(existingUser.length === 0){
        const hashedPassword =  bcrypt.hashSync(userDetails.password, saltround);
         await User.create({
            name: userDetails.name,
            email: userDetails.email,
            password: hashedPassword
        })
        res.json({message: "User created"})
    }else{
        
        res.json({ message: "user already exists,please login"})
    }
}


exports.login=async (req,res,next)=>{
    try{
    const {email,password}=req.body
const user=await User.findAll({where:{email}})
if(user.length>0){
bcrypt.compare(password,user[0].password,(err,result)=>{
    if(err){
        throw new Error('Something went wrong') 
    }
    if(result===true){
        return res.status(200).json({success:true,message:"user successfully logged in"})
    }
    else{
        return res.status(400).json({success:false,message:"password is incorrect"})
    }
})
   
}

}


catch(err){
res.status(500).json({Message:err,success:false})
}}