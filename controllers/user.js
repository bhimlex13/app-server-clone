// controller
import { User } from '../models/User.js';
import bcrypt from 'bcrypt';


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
