module.exports = function (app,db) {

    app.get('/populateTest', function (req, res) {
        res.render('populateTest.jade', { title: 'Wanderblog', year: new Date().getFullYear(), isLoggedIn : req.session.isLoggedIn});
    });

    app.post('/populateTest', function (req, res) {



    var theQuerry="CREATE TABLE asdf";
    db.getConnection(function (err, connection) {
        connection.query(theQuerry, function (err, result) {
            //catch mysql connection error
            if (err) throw err;
            connection.release();
        });


    });
        var theQuerry="CREATE TABLE users(id INTEGER(10) NOT NULL AUTO_INCREMENT, #primary key type VARCHAR(6) NOT NULL, #user type (admin, author or reader))engine=innodb;";
        db.getConnection(function (err, connection) {
            connection.query(theQuerry, function (err, result) {
                //catch mysql connection error
                if (err) throw err;
                connection.release();
            });


        });



    });

};