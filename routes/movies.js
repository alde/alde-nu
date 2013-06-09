var mongoose = require('mongoose'),
    Movies = mongoose.model('Movies');

module.exports = function(app) {
    app.get('/movies', function(req, res) {
        Movies.find(function( err, movies, count ) {
            res.render(
                'movies', {
                title: 'Alde.nu - List of movies',
                movies: movies
            });
        });
    });
};

