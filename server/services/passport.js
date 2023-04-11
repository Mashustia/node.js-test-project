const passport = require('passport');
const {Strategy: googleStrategy} = require('passport-google-oauth20');
const keys = require('../config/keys');

passport.use(
    new googleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile) => {
        console.log(accessToken, 'accessToken')
        console.log(refreshToken, 'refreshToken')
        console.log(profile, 'profile')
    })
);