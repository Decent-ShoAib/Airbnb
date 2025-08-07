import jwt from 'jsonwebtoken';

const genToken = async (user_id)=>{
    try {
        let token = jwt.sign({id: user_id}, process.env.JWT_SECRET_KEY, {expiresIn:"7d"})
        return token;
    } catch (error) {
        console.log(`token error ${error}`);
    }
}

export default genToken;