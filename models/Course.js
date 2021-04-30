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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});



export const Course = mongoose.model('course',courseSchema);
