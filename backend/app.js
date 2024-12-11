const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRoutes = require('../backend/routes/userRoutes');
const itemRouter = require("../backend/routes/itemRouter")

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true,
}));

// Routes
app.use('', userRoutes);
app.use('/api',itemRouter)

module.exports = app;
