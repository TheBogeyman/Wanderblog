/**
 * Created by Georgi on 29.11.2015 �..
 */
module.exports = function (app,db) {
    app.get('/comment', function (req, res) {
        console.log(titlePage);
        res.render('comment.jade');
    });
};