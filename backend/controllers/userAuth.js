const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        // Destructure with correct spelling
        const { firstname, emailId, password } = req.body;

        // Basic validation
        if (!firstname || !emailId || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ emailId });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists, please login" });
        }

        // Hash password with await (CRITICAL FIX)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user with hashed password
        const user = await User.create({
            firstname,
            emailId,
            password: hashedPassword
        });

        // Create token with correct spelling: expiresIn
        const token = jwt.sign(
            { _id: user._id, emailId: user.emailId },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // or { expiresIn: 3600 }
        );

        // Set secure cookie
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000
        });

        res.status(201).json({
            message: "Registered Successfully",
            user: {
                id: user._id,
                firstname: user.firstname,
                emailId: user.emailId
            }
        });

    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ message: "Registration failed", error: err.message });
    }
};

const login = async (req, res) => {
    try {
        const { emailId, password } = req.body;

        // Validate input
        if (!emailId) {
            return res.status(400).json({ message: "Email required" });
        }
        if (!password) {
            return res.status(400).json({ message: "Password required" });
        }

        // Find user
        const user = await User.findOne({ emailId });
        if (!user) {
            return res.status(400).json({ message: "User doesn't exist, please register" });
        }

        // Compare password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: "Wrong password" });
        }

        // Create token
        const token = jwt.sign(
            { _id: user._id, emailId: user.emailId },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Set secure cookie
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000
        });

        res.status(200).json({
            message: "Login Successfully",
            user: {
                id: user._id,
                firstname: user.firstname,
                emailId: user.emailId
            }
        });

    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: "Login failed", error: err.message });
    }
};
const logout = async (req, res) => {
    try {
        // Clear the cookie with the same options used when creating it
        res.clearCookie('token', {
            httpOnly: true,
            sameSite: 'strict'
        });

        res.status(200).json({ 
            message: "Logged out successfully" 
        });

    } catch (err) {
        console.error('Logout error:', err);
        res.status(500).json({ 
            message: "Logout failed", 
            error: err.message 
        });
    }
};

module.exports = { register, login ,logout};
