const adminMiddleware = async (req, res, next) => {
    try {
        if(!req.user.isAdmin){
            return res.status(403).json({
                sussess: false,
                message: "User is not Admin!"
            })
        };

        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
};

module.exports = adminMiddleware;