import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config( {path:'.env'} );
// require('dotenv').config(); ?? not working || err: require undefined

import usersRoutes from './routes/users.js';

const app = express();

app.use('/api/users', usersRoutes);

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.options('*', cors())

app.use(express.json());

const connectDB = async () => {
    try{
        const con = await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`Database connection established. [${con.connection.name}]`);
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

//Invoke ConnectDB(); to establish MongoBD Connection
connectDB();

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


