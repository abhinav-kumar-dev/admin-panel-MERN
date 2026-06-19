const UserModel = require("../models/user-model");
const ContactModel = require("../models/contact-model");

const getAllUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find().select("-password");
        if (!users || users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No users found",
            });
        };
        return res.status(200).json({
            success: true,
            message: "Users Found",
            data: users
        });
    } catch (error) {
        next(error.message);
    };
};

const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await ContactModel.find();

        if (!contacts || contacts.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No contacts found",
            });
        };

        return res.status(200).json({
            success: true,
            message: "contacts found",
            data: contacts
        });
    } catch (error) {
        next(error.message)
    };
};

// Get User By ID

const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;

        const data = await UserModel.findOne({ _id: id.toString() }).select("-password");

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "No users found"
            });
        };

        return res.status(200).json({
            success: true,
            message: "User Info Found",
            data
        })
    } catch (error) {
        next(error.message)
    };
};

// Update User By ID

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { username, email, phone } = req.body;

        const user = await UserModel.findById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        user.username = username ?? user.username;
        user.email = email ?? user.email;
        user.phone = phone ?? user.phone;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "User updated successfully"
        });

    } catch (error) {
        next(error);
    }
};

// Delete User with Id

const deleteUserWithId = async (req, res, next) => {
    try {
        let id = req.params.id;
        if (!id) {
            return res.status(500).json({
                success: false,
                message: "Something Went Wrong"
            });
        };

        let deleteUser = await UserModel.deleteOne({ _id: id.toString() });
        if (deleteUser.deletedCount === 0) {
            return res.status(501).json({
                success: false,
                message: "No User Found"
            });
        };

        return res.status(200).json({
            success: true,
            message: "User Deleted"
        });
    } catch (error) {
        next(error.message)
    };
};

// Delete User with Id

const deleteContactById = async (req, res, next) => {
    try {
        let id = req.params.id;
        if (!id) {
            return res.status(500).json({
                success: false,
                message: "Something Went Wrong"
            });
        };

        let deleteContact = await ContactModel.deleteOne({ _id: id.toString() });
        if (deleteContact.deletedCount === 0) {
            return res.status(501).json({
                success: false,
                message: "No User Found"
            });
        };

        return res.status(200).json({
            success: true,
            message: "User Deleted"
        });
    } catch (error) {
        next(error.message)
    };
};

module.exports = { getAllUsers, getAllContacts, deleteUserWithId, getUserById, updateUser, deleteContactById };