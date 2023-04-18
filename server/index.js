const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')
const authRoutes = require('./routes/authRoutes')

mongoose.connect(keys.mongoURI).then(() => console.log('Connected!'))

const app = express()

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 & 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)

// gets port env variable from heroku every time the app starts
const PORT = process.env.PORT || 4000
app.listen(PORT)
