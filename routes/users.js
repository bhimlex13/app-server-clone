//Users Router

import express from 'express';
import { register, checkEmail, login } from '../controllers/user.js';



const router = express.Router();
router.use(express.json());
// Primary user routes
// root: /api/users



// Create a new user
//router.post('/register',register);
//res.send(UserController.register(userData));

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

// router.get();

//Update user by ID

// router.put();

//Delete user by ID

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
    res.send({
      data: result
    });
  });
})



export default router;