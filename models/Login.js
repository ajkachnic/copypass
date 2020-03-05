const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:String,
    username:String,
    password: String,
    sessionCode: {
        type:Number,
        required:true,
        validate: (val) => {
            if(val.toString().length != 6) {
                throw new Error("Session code incorrect length. Expected length of 6 characters")
            }
        }
    }
})

module.exports = mongoose.models.Login || mongoose.model('Login', schema)