import genToken from "../config/token.js";
import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'

      //////   SIGNUP CONTROLLER   ///////

export const signUp = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        let emailExit = await User.findOne({ email })
        if (emailExit) {
            return res.status(400).json({ message: 'email already exits' });
        }
        let hashPassword = await bcrypt.hash(password, 10);

        let user = await User.create({ name, email, password: hashPassword });

        let token = await genToken(user._id);

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ message: `sign up error ${error}` })
    }
}
      //////   LOGIN CONTROLLER   ///////

export const login = async (req, res) => {
    try {
        let { email, password } = req.body;

        let user = await User.findOne({ email }).populate("listing","title image1 image2 image3 description rent category city landmark")
        if (!user) {
            return res.status(400).json({ message: 'incorrect email or password' });
        }
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'incorrect email or password' })
        }

        let token = await genToken(user._id);

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: `login error error ${error}` })
    }
}

      //////   LOGOUT CONTROLLER   ///////

export const logOut =  ((req, res)=>{
    try {
        res.clearCookie('token')
        return res.status(200).json({message:'logout successful'})
    } catch (error) {
        return res.status(500).json({message:`logout error ${error}`})
    }
})


// 123@gmail.com