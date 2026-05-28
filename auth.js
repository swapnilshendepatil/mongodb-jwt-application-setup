const jwt=require('jsonwebtoken')


const auth=(req,res,next)=>{
    const token=req.headers.token;
    const validateToken=jwt.verify(token,JWT_SECRET)
    if(validateToken){
        req.userId=validateToken.id
        next()
    }else{
        res.status(403).json({
            err:'Invalid Credentials'
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
};