require('dotenv').config();
const jwt=require('jsonwebtoken');

const veryfyToken =(req,res,next)=>{
    try{
        const{authorization}=req.headers;
        if(authorization){
            //extract jwtToken from header
            const token=authorization.split(' ')[1];
            // chack validity of token
            const decode=jwt.verify(token,process.env.JWT_ACCESS_SECRET);
            console.log(decode);
            req.userData=decode;
            next();
        }else{
            return res.status(401).json({status:false,message:'Token not found',data:error})
        }
    }catch(error){
        return res.status(402).json({status:false,message:'Token not valid',data:error})
    }
} 

module.exports={
    veryfyToken,
}