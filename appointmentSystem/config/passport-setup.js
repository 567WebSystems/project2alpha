const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
    //options gor the google strategies
    clientID: '1012259665491-h9mjitf64jabj5b5fm03umu5c6a84t9o.apps.googleusercontent.com',
    clientSecret: 'bZtqSBXzK7MtfNHrSOXya8Us'
    }), ()=> {
        //passport callback function
    }
);