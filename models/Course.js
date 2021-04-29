// Course Model

import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    enrollees: [{
        userId: String,
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



export const Course = mongoose.model('course',courseSchema);
