import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    emailAdress: {
        type: String
    },
    password: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    mobileNumber: {
        type: String
    }
});

const User = mongoose.model('user',userSchema);
module.exports = User;