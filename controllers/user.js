// controller
import { User } from '../models/User.js';
import bcrypt from 'bcrypt';


// Create new user
// export const register =  (req,res) => { 
//     const userData = req.body;
//     let { firstName, lastName, emailAddress, password, mobileNumber } = userData;
//     password = bcrypt.hashSync(password, 10);
//     let newUser = new User({
//         firstName,
//         lastName,
//         emailAddress,
//         password,
//         mobileNumber
//       });
//     newUser.save((err, newUser) => {
//         if(err) return console.err(err);
//         res.send({
//             message: "User successfully registered",
//             data: newUser
//         })
//     });  
//  }

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
    return (err) ? false : true; // return a boolean
  });
};


export const checkEmail = (emailAddress) => {
  return User.find({ emailAddress }).then(result => {
    return result.length > 0 ? true: false;
  });
}


export const login = (userData) => {
  const { emailAddress, password } = userData;
  // Retrive the user document via email address
  
  return User.findOne({ emailAddress }).then(user => {
    
    // user: model (document) or null
    
    // If user account was not found
    
    if(user === null) {
      return false
    } else {
      // user document was found
      // Check if the password provided will matched the password in the user document

      const isPasswordMatched = bcrypt.compareSync(password, user.password);
      if(isPasswordMatched){
        return true;
      }else {
        return false;
      }
    }    
  });
};
//