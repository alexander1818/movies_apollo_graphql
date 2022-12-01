const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    username: {type: String, min: 2, max: 50, default: null, require},
    email: {type: String, unique: true, require},
    password: {type: String},
    token: {type: String},
    refreshToken: {type: String},
    createdAt: {type: Date, default: Date.now()},
    },
    {timestamps: true})

module.exports = model('User', userSchema);