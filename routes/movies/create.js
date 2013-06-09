var mongoose = require('mongoose'),
    Movies = mongoose.model('Movies');

module.exports = function(app) {
    app.post('/movies/create', function( req, res ) {
        if (req.body.original_title === '') {
            req.body.original_title = req.body.title;
        }
        new Movies({
            title: req.body.title,
            original_title: req.body.original_title,
            region: req.body.region
        }).save(function( err, movie, count) {
            console.log(count);
            res.redirect('/movies');
        });
    });
};
