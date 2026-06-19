require("dotenv").config();
const express = require("express");
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const servicesRouter = require("./router/services-router");
const adminRouter = require("./router/admin-router");
const db = require("./utils/db");
const errorMiddleware = require("./middlewares/errorMiddleware");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

// Main Routes

app.use("/api/v1/", authRouter);
app.use("/api/v1/", contactRouter);
app.use("/api/v1/", servicesRouter);

// Admin Rotes

app.use("/api/v1/admin",adminRouter);

app.use(errorMiddleware);

const PORT = 5000;
db().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    })
})
