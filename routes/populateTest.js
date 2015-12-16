module.exports = function (app,db) {

    app.get('/populateTest', function (req, res) {
        res.render('populateTest.jade', { title: 'Wanderblog', year: new Date().getFullYear(), isLoggedIn : req.session.isLoggedIn});
    });

    app.post('/populateTest', function (req, res) {



    var theQuerry="CREATE TABLE asdf";
    db.getConnection(function (err, connection) {
        connection.query(theQuerry, function (err) {
            //catch mysql connection error
            if (err) throw err;
            connection.release();
        });
    });

    });

};