import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

<<<<<<< HEAD

=======
>>>>>>> develop
dotenv.config( {path:'.env'} );
// require('dotenv').config(); ?? not working || err: require undefined
//
import usersRoutes from './routes/users.js';

const app = express();

app.use('/api/users', usersRoutes);

app.use(cors());
app.use(express.json());

// const connectDB = async () => {
//     try{
//         const con = await mongoose.connect(process.env.DB_CONNECTION_STRING, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false
//         })
//         console.log(`Database connection established. [${con.connection.name}]`);
//     } catch(err) {
//         console.log(err);
//         process.exit(1);
//     }
// }

// //Invoke ConnectDB(); to establish MongoBD Connection
// connectDB();


let connectionString = process.env.DB_CONNECTION_STRING;
let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};
mongoose.connect(connectionString, options);
mongoose.connection.on('error', console.error.bind(console, 'connection error: '));
mongoose.connection.once('open', () => console.log('Database connetion established'));


const port = process.env.PORT || 3000;


// root route

app.get('/',(req,res) => {
    res.status(200);
    res.json({
        message: 'The Course Booking System API'
    });
});


app.listen(port, ()=> {
    console.log(`Application server is running at http://localhost:${port}`);
});


