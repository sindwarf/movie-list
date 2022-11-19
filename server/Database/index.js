const mysql = require('mysql2');

//TODO: login to our database
//      export connection

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movies'
});

module.exports = connection;