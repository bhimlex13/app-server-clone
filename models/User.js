// User Model

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

export const User = mongoose.model('user',userSchema);