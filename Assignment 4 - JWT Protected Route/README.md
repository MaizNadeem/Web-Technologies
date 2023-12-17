# GREAD READ - JWT Authentication

There is a unique implementation of Token-based authentication implemented in this project. Instead of storing the token on client-side, it is being retrieved from the database for more controlled access and for a specific scenario regarding "Reset Password" implementation.

### PROTECTED ROUTE (Storing tokens in database):

Creates a token when a request is received for resetting password. When a post request is made to reset to new credentials, the token is validated from database and then deleted after making required changes.

Complete implementation can be found in `Great Read/server/services/authService.js`

```javascript

const requestPasswordReset = async (email, protocol, hostname, port) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Email does not exist");

    let token = await Token.findOne({ userId: user._id });
    if (token) await token.deleteOne();

    let resetToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, Number(bcryptSalt));

    await new Token({
        userId: user._id,
        token: hash,
        createdAt: Date.now(),
    }).save();
    const baseUrl = `${protocol}://${hostname}${port ? `:${port}` : ''}`;
    const link = `${baseUrl}/reset/passwordReset?token=${resetToken}&id=${user._id}`;


    sendEmail(
        user.email,
        "Password Reset Request",
        {
            name: user.name,
            link: link,
        },
        "./template/requestResetPassword"
    );
    return { link };
};

```

### PROTECTED ROUTE (Token in Request Headers):

A token is sent through request headers, preventing XSS and CSRF. Validated using this `jwtCheck` middleware, and then the route can be accessed. 

Complete implementation can be found in `Real Estate/server/services/routes/userRoute.js`

```javascript

import { auth } from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: 'https://real-estate-web-lac.vercel.app',
    issuerBaseURL: 'https://dev-ccw5bra5gc5nxss7.us.auth0.com',
    tokenSigningAlg: 'RS256'
})

export default jwtCheck

```

Some protected routes using this middleware are as follows:

```javascript

import express from 'express'

import jwtCheck from '../config/auth0Config.js'
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavourites, manageFavourites } from '../controllers/userController.js'

const router = express.Router()

router.post("/register", jwtCheck, createUser)
router.post("/bookvisit/:id", jwtCheck, bookVisit)
router.post("/getallbookings", getAllBookings)
router.post("/cancelbooking/:id", jwtCheck, cancelBooking)
router.post("/managefavourites/:id", jwtCheck, manageFavourites)
router.post("/getallfavourites", jwtCheck, getAllFavourites)

export { router as userRoute }

```

