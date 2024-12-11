const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('C:/Users/tirth/FSDIndi/FSDIndi/backend/models/user');

const signup = async (req, res) => {
    const { username, password, email, contact } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            password: hashedPassword,
            email,
            contact
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = jwt.sign({ email: user.email }, "techgroove", { expiresIn: "1h" });

        // Set cookies for token and email
        res.cookie('token', token, {
            httpOnly: true,     // To prevent client-side access to the token
            secure: false,      // Set to true if using HTTPS
            sameSite: 'strict', // Prevent CSRF attacks
            path: '/',          // Ensure path is consistent
            maxAge: 60 * 60 * 1000 // 1 hour in milliseconds
        });

        res.cookie('email', email, {
            httpOnly: false,    // Allow client-side access to email
            secure: false,      // Set to true if using HTTPS
            sameSite: 'strict', // Same policy as token
            path: '/',          // Same path as token
            maxAge: 60 * 60 * 1000 // 1 hour in milliseconds
        });

        res.status(200).json({ token, email, user: {
            username: user.username,
            email: user.email,
            contact: user.contact
        } });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// const logout = (req, res) => {
//     res.cookie("token", "", { expires: new Date(0) });
//     res.status(200).send("Logged out successfully");
// };

const logout = (req, res) => {
    res.cookie("token", "", { expires: new Date(0) });
    res.status(200).send("Logged out successfully");
};

module.exports = { signup, login, logout };
