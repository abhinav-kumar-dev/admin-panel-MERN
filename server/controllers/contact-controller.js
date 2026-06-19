const ContactModel = require("../models/contact-model");

const contactController = async (req, res) => {
    try {
        const {username, email, message} = req.body;

        if(!message) {
            return res.status(400).json({
                success: false,
                message:"Please enter you message"
            });
        };

        const saveMessgae = await ContactModel.create({username, email, message});

        if(saveMessgae){
            return res.status(201).json({
                succes: true,
                message: "Message sent successfully"
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Failed to send message"
        });
    };
};

module.exports = contactController;