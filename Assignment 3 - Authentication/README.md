# GREAD READ - User Authentication

Session-based user authentication has been implemented in this project.

### SIGN UP:

Creates a user in database and hashes it's password using `bcrypt.js`. Following is a code snippet to provide idea of the functionality.

```javascript

const express = require('express');
const signupRoute = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

signupRoute.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send('User already exists.');
        }

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        req.session.isAuthenticated = true;
        res.redirect('/admin');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred during signup.');
    }
});

module.exports = { signupRoute };

```

Navigate to `server/routes/signupRoute.js` for detailed code.

### LOGIN:

Authenticates a user by comparing password using `bcrypt.js`. Following is a code snippet to provide idea of the functionality.

```javascript

const express = require('express');
const loginRoute = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

loginRoute.post('/', async (req, res) => {
    const { username, password } = req.body;
    const email = username;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send('Authentication failed. Email not found.');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            req.session.isAuthenticated = true;
            res.redirect('/admin');
        } else {
            res.status(401).send('Authentication failed. Incorrect password.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred during authentication.');
    }
});

module.exports = { loginRoute };

```

Navigate to `server/routes/loginRoute.js` for detailed code.

### LOGOUT:

Simply sets user authentication to false. Following is a code snippet to provide idea of the functionality.

```javascript

const express = require('express');
const logoutRoute = express.Router();

logoutRoute.post('/', (req, res) => {
    req.session.isAuthenticated = false;
    res.redirect('/');
});

module.exports = { logoutRoute };

```

Navigate to `server/routes/logoutRoute.js` for detailed code.