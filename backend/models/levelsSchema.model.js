const mongoose = require('mongoose');
const levelsSchema = mongoose.Schema;

let levels = new levelsSchema({
    levelNo: {
        type: String
    },
    levelName: {
        type: String
    },
    levelType: {
        type: String
    },
    questions: {
        type: Array
    },
    answers: {
        type: Array
    },
});

module.exports = mongoose.model('levels', levels);