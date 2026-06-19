const jwt = require("jsonwebtoken");
const UserModel = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization")

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized HTTP, Token not provided"
            })
        };

        let validToken = token.split(" ")[1];

        const decoded = jwt.verify(validToken, process.env.SECRET_KEY);
        const userEmail = decoded.email;

        const data = await UserModel.findOne({ email: userEmail }).select("-password");

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        req.user = data;
        req.userId = data._id;
        req.token = validToken;

        next();
    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
};

module.exports = authMiddleware;