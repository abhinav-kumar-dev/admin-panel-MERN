const ServicesModel = require("../models/service-model");

const servisesController = async (req, res) => {
    try {
        const data = await ServicesModel.find();

        if(!data){
            return res.status(401).json({
                success: false,
                message: "services not found"
            });
        };

        return res.status(200).json({
            success: true,
            message: "services found",
            data
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"Internal server error"
        })
    }
};

module.exports = servisesController;