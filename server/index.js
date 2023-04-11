const express = require('express')
require('./services/passport')
const authRoutes = require('./routes/authRoutes')

const app = express()
authRoutes(app)

// gets port env variable from heroku every time the app starts
const PORT = process.env.PORT || 4000
app.listen(PORT)
