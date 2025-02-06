
const jwt =require("jsonwebtoken")

exports.verifyToken=(req, res, next)=> {
    const token =req.cookies.jwt

    if(!token){
        return res.status(401).json({message : 'UnAuthorized Token or Invalid'})
    }

    try {
        const decode =  jwt.verify( token,process.env.JWT_SECRET)

        req.user=decode

    } catch (error) {
        console.log(error);
        res.clearCookie('jwt')
        return res.status(403).json({ message: "Invalid or expired token. Please log in again." });
        
        
    }

    next()
}