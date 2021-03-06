// Course Model

import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    isActive: {
      type: Boolean,
      default: true
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



export const Course = mongoose.model('Course',courseSchema);
