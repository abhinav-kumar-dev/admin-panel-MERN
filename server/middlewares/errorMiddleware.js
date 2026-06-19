const errorMiddleware = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal server error";

    return res.status(statusCode).json({
        success: false,
        message
    })
};

module.exports = errorMiddleware;