//Courses Router

import express from 'express';
import {  } from '../controllers/course.js';



const router = express.Router();
router.use(express.json());



router.get('/', (req, res) => {
    res.send({
        message: "Course Route"
    })
 });








export default router;