import User from "../models/userModel.js"

export const getCurrentUser = async (req, res) => {
    try {
        let user = await User.findById(req.user_id).select("-password").populate("listing","title image1 image2 image3 description rent category city landmark")
        if (!user) {
            return res.status(400).json({ message: "user not found" })
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ message: "getCurrentUser error", error })
    }
}