const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
passport.use(
    new GoogleStrategy({
    //options gor the google strategies
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
    }), ()=> {
        //passport callback function
    }
);