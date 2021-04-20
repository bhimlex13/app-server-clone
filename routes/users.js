//Users Router

import express from 'express';
import { register } from '../controllers/user.js';



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

export default router;