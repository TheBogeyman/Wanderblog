module.exports = function (app,db) {
    app.get('/nodeTest', function (req, res) {
        res.render('nodeTest.jade');
    });


    var test = {testVariable : 'stephen'};
    res.render('nodeTest', { locals: { data : test } });

    db.getConnection(function (err, connection) {
        //catch mysql connection error
        if (err) throw err;


        conn.queryRaw("CREATE TABLE asdf", function (err, results){
        if (err) throw err;

            });

        connection.release();
    });

};