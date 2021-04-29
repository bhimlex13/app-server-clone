//Courses Router

import express from 'express';
import { getAll, getCourseDetails } from '../controllers/course.js';



const router = express.Router();
router.use(express.json());


// Return all courses
router.get('/', (req, res) => {
    // console.dir(req.query);

    if (req.query.id) {
       getCourseDetails(req.query.id).then(course => {
          res.send({ course });
        });
      } else {
        getAll().then(courses => {
          res.send({ courses });
        });
      }
    });







// Create a new course







export default router;