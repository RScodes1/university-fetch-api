const mysql = require('mysql');

const connection = mysql.createConnection({   // creating a connection to mysql server
    host : "localhost",
    user : "root",
    pass : "Molocode@1 SQL",
    database : "favourites"
})

module.exports = {     // exporting connection
    connection  
}