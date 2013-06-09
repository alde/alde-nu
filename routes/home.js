module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render(
            'index',
            {
                title: 'Alde.nu'
            }
        );
    });

    app.get('movies', require('./movies'));
};
