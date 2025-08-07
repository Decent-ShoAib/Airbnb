import jwt from 'jsonwebtoken'

const isAuth = async (req, res, next) => {
    try {
        let { token } = req.cookies;
        if (!token) {
          return  res.status(400).json({ message: "user doesn't have a tokend" })
        }
        let verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY)

        if (!verifyToken) {
          return  res.status(400).json({ message: "user doesn't have correct token " })
        }
        
        req.user_id = verifyToken.id;
        next()

    } catch (error) {
       return res.status(500).json({ message: "is auth error", error })
    }
}

export default isAuth;