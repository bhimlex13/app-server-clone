// User Model

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    emailAddress: {
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
    },
    enrollments: [{
        courseId: String,
        enrolledOn: {
            type: Date,
            default: new Date()
        },
        status: {
            type: String,
            default: "active"
        }
    }]
});



export const User = mongoose.model('user',userSchema);
