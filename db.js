var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'wanderblog'
});

exports.getConnection = function(callback){
    pool.getConnection(function(err, connection){
        callback(err,connection);
    });
};