const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;

//user schema to store the user information in the mongoDB
const userSchema = new schema({
    username: String,
    googleID: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;