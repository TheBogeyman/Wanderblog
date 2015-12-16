module.exports = function (app,db) {
    app.get('/nodeTest', function (req, res) {
        res.render('nodeTest.jade');
    });


    var test = {testVariable : 'stephen'};
    res.render('nodeTest', { locals: { data : test } });

    db.getConnection(function (err, connection) {
        //catch mysql connection error
        if (err) throw err;
        for (var i = 1; i < tagArray.length; i++) {
            var toInsert = {
                name: tagArray[i]
            };
            connection.query('insert ignore into tag set ?', toInsert, function (err1, result) {
                if (err1) throw err1;

            });
        }
        connection.release();
    });

};