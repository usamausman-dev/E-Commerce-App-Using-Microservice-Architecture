const bcrypt = require('bcrypt');
const supabase = require('./db');

// Register a new user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;

    if (!name || !password || !email) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const { data, error } = await supabase.from('users').insert([{ name: name, password: hashedPassword, email: email }]);

        res.status(201).json({
            message: 'User registered successfully.', user: data , error
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Authenticate a user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    try {
        // Find the user by email
        const { data, error } = await supabase
            .from('users')
            .select('Password, UserID, name')
            .eq('Email', email)
            .single();

        if (error || !data) {
            return res.status(400).json({ error: 'Invalid credentials.' });
        }

        // Compare the password
        const validPassword = await bcrypt.compare(password, data.Password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid credentials.' });
        }

        res.status(200).json({ message: 'Login successful.', user: { UserID: data.UserID, name: data.name } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { registerUser, loginUser };
