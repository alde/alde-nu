var mongoose = require('mongoose'),
    Movies = mongoose.model('Movies');

module.exports = function(app) {
    app.get('/movies', function(req, res) {
        var ip = req.header('x-forwarded-for') || req.ip,
            admin = false;

        if (ip === "78.73.129.204") admin = true;

        Movies.find(function( err, movies, count ) {
            res.render(
                'movies', {
                title: 'Alde.nu - List of movies',
                movies: movies,
                admin: admin
            });
        });
    });
};

