// controller
import { User } from '../models/User.js';
import bcrypt from 'bcrypt';
import { Course } from '../models/Course.js';


// Create new user
export const register = (userData) => {
  let {firstName, lastName, emailAddress, password, mobileNumber} = userData;
  password = bcrypt.hashSync(password, 10); // encrypt the plain text password
  let newUser = new User({
    firstName, 
    lastName, 
    emailAddress, 
    password,
    mobileNumber
  });
  return newUser.save().then((user, err) => {
    return (err) ? false : true; 
  });
};


export const getUserDetails = (userId) => {
  return User.findById(userId, "-password").then(userDetails => {
    return userDetails;
  });
};


export const checkEmail = (emailAddress) => {
  return User.find({ emailAddress }).then(result => {
    return result.length > 0 ? true: false;
  });
}


export const login = (userData) => {
  const { emailAddress, password } = userData;
  // Retrieve the user document via email address
  return User.findOne({ emailAddress }, 'password').then(user => {
    // user: model (document) or null
    if (user === null) {
      return false;  // user document was not found
    } else {
      // user document was found
      // Check if the password provided will matched the password in the user document
      const isPasswordMatched = bcrypt.compareSync(password, user.password);
      if (isPasswordMatched) {
        let userUpdated = user.toObject();
        delete userUpdated.password;
        return {
          data: true,
          userDetails: userUpdated
        };
      } else {
        return false;
      }
    }
  });
};



export const enroll =  (userId, courseName) =>  {

  return   User.findById(userId).then(user => {
    // Insert a new document to enrollments array
     user.enrollments.push({
      courseName
    });
    return user.save().then((_, err) => {
      // Insert new enrollee to enrollees array of a course
      return Course.find({ name: courseName }).then(course => {
         course.enrollees.push({
          userId
        });
        return course.save().then((_, err) => {
          return err ? false : true;
        });
      });
    });
  });
};