const express = require('express');
const { signup, login, logout } = require("C:/Users/tirth/FSDIndi/FSDIndi/backend/controllers/userController")

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
