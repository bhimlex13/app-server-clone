// controller
import { Course } from '../models/Course.js';


export const getAll = () => {
    return Course.find({}).then(courses => {
        return courses;
    });
};


export const getCourseDetails = (courseId) => {
  return Course.findById(courseId).then(course => {
      return course;
  });  
};