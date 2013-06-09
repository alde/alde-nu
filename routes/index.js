var fs = require('fs');

module.exports = function(app) {
    require('./home')(app);
    require('./movies')(app);
    require('./movies/create')(app);
    require('./movies/delete')(app);
};


