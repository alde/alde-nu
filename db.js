var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Movies = new Schema({
        title: String,
        region: Number,
        original_title: String
    });

mongoose.model('Movies', Movies);

mongoose.connect('mongodb://localhost/express-movies');

