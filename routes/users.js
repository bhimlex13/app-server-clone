//Users Router
import express from 'express';
import { register, checkEmail, login, getUserDetails, enroll } from '../controllers/user.js';
// import { User } from '../models/User.js';


const router = express.Router();
router.use(express.json());

// Create a new user
router.post('/register', (req, res) => {
  const userData = req.body;
  register(userData).then(result => {
    res.send({
      message: 'New user has been created',
      data: result
    });
  });
});

// Retrieve all users

// router.get();

//Retrieve a specific user by ID
router.get('/details', (req, res) => {
   const { id: userId } = req.query;
   getUserDetails(userId).then(userDetails => {
     res.send({  userDetails });
   });
});

// router.get();

// Update user by ID

// router.put();

// Delete user by ID

// router.delete();

// check if user (email) already exist
router.post('/check-email', (req, res) => {
  const { emailAddress } = req.body;
  checkEmail(emailAddress).then(result => {
    res.send({
      message: 'User already existed',
      data: result
    });
  });
});

// Login a user
router.post('/login', (req, res) => {
  const userData = req.body;
  login(userData).then(result => {
    const { data , userDetails } = result;
    res.send({
     data,
     userDetails
    });
  });
})


// Enroll a users to a course
router.post('/enroll', (req, res) => {
  // console.dir(req.body);
  const { userId, courseName } = req.body;
  enroll(userId, courseName).then(result => {
    res.send({
      message: result
    });
  });
});

export default router;