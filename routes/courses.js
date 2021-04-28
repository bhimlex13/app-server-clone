//Courses Router

import express from 'express';
import { getAll } from '../controllers/course.js';



const router = express.Router();
router.use(express.json());


// Return all courses
router.get('/', (req, res) => {
    getAll().then(courses => {
        res.send({ courses })
    });
});

// Create a new course







export default router;