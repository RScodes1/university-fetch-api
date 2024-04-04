const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT;

// importing
const {connection} = require('./config/db');

// middlewares
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send({msg : "Hello server has started"});
})

const {connection} = require('../config/db');

favRoutes.get('/favourites', (req,res)=>{
    // const {}
     const query = "SELECT * FROM favourites";
     connection.query(query, (err, results) => {
        if(err){
            console.error('Error selecting data:', err);
            return res.status(500).json({ error: err.message });
        }
        else 
        // const response =  
         res.status(200).send(results);
    })
})

favRoutes.post('/favourites', (req,res)=>{
     
      const { name, stateProvince, webPage } = req.body
     
      const query = `INSERT INTO favourites (name, stateProvince, webPage), VALUES(?,?,?)`;

      connection.query(query, [name, stateProvince, webPage], (err, result)=>{
        if(err){
            res.status(502).send({msg : "error while logging into the database"});
        }
        else if(result) {
            res.status(202).send({msg : "university logged into the file"});
        }
      })
})

  function addToFavorites(name, stateProvince, webPage){
      fetch('/favourites',{
        method : "POST",
        headers : {
            "Content-Type" : "application/json", 
        },
        body : JSON.stringify({
            name : name,
            stateProvince : stateProvince,
            webPage : webPage
        })
      })
      .then(response => response.json())
       .then(data => {
          alert(data.message)
          window.location.href = "favourite.html"
       })
       .catch(error => {
        console.error('Error:', error);
    });
 }


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
