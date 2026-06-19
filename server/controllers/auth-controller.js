const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user-model");
const signupSchema = require("../validators/signupSchema")
const loginSchema = require("../validators/loginSchema")

const register = async (req, res, next) => {
    try {

        // Zod Validtaion
        const result = signupSchema.safeParse(req.body);
        if (!result.success) {
            const statusCode = 400;
            const message = result.error.issues[0].message;
            let err = {
                statusCode,
                message
            };

            next(err)
        }

        // Register Logic
        const { username, email, phone, password } = result.data;

        if (!username || !email || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: "all fields are mandatory"
            })
        }

        const emailExists = await UserModel.findOne({ email });

        if (emailExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        const saltRounds = 10
        const hashed_password = await bcrypt.hash(password, saltRounds);

        const createUser = await UserModel.create({ username, email, phone, password: hashed_password });

        const token = jwt.sign(
            {
                userId: createUser._id,
                email: createUser.email
            },
            process.env.SECRET_KEY,
            {
                expiresIn: "24h"
            }
        );

        if (!token) {
            return res.status(500).json({
                success: false,
                message: "Failed to generate token"
            });
        }

        return res.status(201).json({
            success: true,
            message: "Registration succesful",
            userId: createUser._id.toString(),
            token
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "internal server error"
        });
    };
};

const login = async (req, res, next) => {
    try {
        // Zod Validtaion
        const result = loginSchema.safeParse(req.body);
        if (!result.success) {
            const statusCode = 400;
            const message = result.error.issues[0].message;
            let err = {
                statusCode,
                message
            };

            return next(err)
        }

        // Login Logic
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "all fields are required"
            });
        };

        const emailExist = await UserModel.findOne({ email });

        if (!emailExist) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        const user = await bcrypt.compare(password, emailExist.password);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                userId: emailExist._id,
                email: emailExist.email,
                isAdmin: emailExist.isAdmin,
            },
            process.env.SECRET_KEY,
            {
                expiresIn: "24h"
            }
        );

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Failed to generate token"
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "Login Successful",
                userId: emailExist._id.toString(),
                token
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        });
    };
};

const getUser = async (req, res) => {
    try {
        let data = req.user;

        if(!data){
            return res.status(401).json({
                success: false,
                message:"user not found"
            });
        };

        return res.status(200).json({
            success: true,
            message: "user found",
            data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        });
    }
}

module.exports = { register, login, getUser };