var mysql = require('mysql');
var connection = mysql.createConnection({
    //Here put credentials for your local sql.
    host     : 'us-cdbr-azure-central-a.cloudapp.net',
    user     : 'bc103542111d8a',
    password : '5de22dac',
    database : 'wanderblog'
});

connection.connect();

var queryString = 'CREATE TABLE asdf';

connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;


});

connection.end();