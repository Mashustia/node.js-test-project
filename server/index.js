const express = require('express')
const mongoose = require('mongoose')
require('./services/passport')
const authRoutes = require('./routes/authRoutes')
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI).then(() => console.log('Connected!'))

const app = express()
authRoutes(app)

// gets port env variable from heroku every time the app starts
const PORT = process.env.PORT || 4000
app.listen(PORT)
