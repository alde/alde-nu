var mongoose = require('mongoose'),
    Movies = mongoose.model('Movies');

module.exports = function(app) {
    app.post('/movies/delete/:id', function( req, res ) {
        var ip = req.header('x-forwarded-for') || req.ip;
        if (ip !== "78.73.129.204") {
            res.json( { msg: "You can't do that.", status: 403 }, 403 );
        } else {
            Movies.findById( req.params.id, function (err, movie ) {
                movie.remove (function (err, todo) {
                    if (!!err) {
                        res.json(err, 500);
                    }
                    res.json( { msg: "Success", status: 200}, 200);
                });
            });
        }
    });
};
