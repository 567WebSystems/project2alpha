const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');
passport.use(
    new GoogleStrategy({
    //options gor the google strategies
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done)=> {
        //passport callback function
        console.log(profile);

        //check if user already exists in database
        User.findOne({
            googleId: profile.id
        }).then((currentUser) => {
            if(currentUser){
                //User exists
                console.log('user already exists', currentUser);
            }else{
                //create User
                new User({
                    userName: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log('new user was created' +newUser);
                });
            }
        });
    })
)