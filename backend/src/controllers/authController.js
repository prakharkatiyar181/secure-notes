const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const [existingUsers] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

        if (existingUsers.length > 0) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const password_hash = await bcrypt.hash(password, salt);

        const [result] = await pool.query(
            'INSERT INTO users (email, password_hash) VALUES (?, ?)',
            [email, password_hash]
        );

        const insertedId = result.insertId;

        const payload = {
            user: {
                id: insertedId,
            },
        };

        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });

        await pool.query('UPDATE users SET refresh_token = ? WHERE id = ?', [refreshToken, insertedId]);


        res.json({ accessToken, refreshToken });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

        if (users.length === 0) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const user = users[0];

        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });

        await pool.query('UPDATE users SET refresh_token = ? WHERE id = ?', [refreshToken, user.id]);

        res.json({ accessToken, refreshToken });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const refreshToken = (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.sendStatus(401);
    }

    pool.query('SELECT * FROM users WHERE refresh_token = ?', [token])
        .then(([users]) => {
            if (users.length === 0) {
                return res.sendStatus(403);
            }

            jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }

                const payload = {
                    user: {
                        id: user.user.id,
                    },
                };

                const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' });

                res.json({ accessToken });
            });
        })
        .catch(err => {
            console.error(err.message);
            res.status(500).send('Server error');
        });
};


const logout = async (req, res) => {
    // client should send the refresh token
    const { token } = req.body;
    if (token) {
        await pool.query('UPDATE users SET refresh_token = NULL WHERE refresh_token = ?', [token]);
    }
    res.json({ msg: 'Logout successful' });
};


module.exports = {
    register,
    login,
    refreshToken,
    logout,
};