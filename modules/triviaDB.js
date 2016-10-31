var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/gamedatabase');

// Create a game schema
var gameSchema = mongoose.Schema({
    question: String,
    answer: String,
});

// Create a database collection model
var triviaGame = mongoose.model('gamedatabase', gameSchema);

module.exports.triviaGame = triviaGame;