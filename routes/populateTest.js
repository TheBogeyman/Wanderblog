module.exports = function (app,db) {

    app.get('/adventureForm', function (req, res) {
        res.render('adventureForm.jade', { title: 'Wanderblog', year: new Date().getFullYear(), isLoggedIn : req.session.isLoggedIn});
    });

    app.post('/adventureForm', function (req, res) {


    });
    var theQuerry="CREATE TABLE ASDF";
    db.getConnection(function (err, connection) {
        connection.query(theQuerry, function (err, result) {
            //catch mysql connection error
            if (err) throw err;
            connection.release();
        });


    });



};