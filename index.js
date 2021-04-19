import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config( {path:'.env'} );
// require('dotenv').config(); ?? not working

const app = express();

app.use(cors());

const connectDB = async () => {
    try{
        // mongo connection string
        const con = await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log(`Database connection established || ${con.connection.host}`);
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

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

//cbs_db_admin
//V2uPHX1kFfexCGUB

