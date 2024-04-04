const express = require('express');

const app = express();

const port = process.env.PORT;

// importing
const {connection} = require('./config/db');


// middlewares
app.use(express.json());

app.get('/',(req,res)=>{
    res.send({msg : "Hello server has started"});
})


app.listen(port, ()=>{
     try {
         connection.connect(err => {
             if(err){
               console.log({msg: "Error connecting to the database"});
             }
             else {
               console.log({msg : "Connected to the db"}); 
                console.log(`the server is running on http://localhost:${port}`);
                connection.query("CREATE DATABASE favourites", (err, result)=>{
                    if(err){
                        res.send(501).send({msg : "error occurred", err});
                    }
                    else {
                        console.log("database created");
                    }
                })
             }
        })
     } catch (error) {
         console.log("error", error.message);
     }
})