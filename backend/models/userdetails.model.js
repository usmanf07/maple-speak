const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDetailSchema = new Schema({
  id_: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
    name: { type: String, required: true },
    levelsCompleted: { type: String, required: true },
    diamonds: { type: String, required: true },
    avatar: { type: String, required: true },
    learnLang: { type: String, required: true },
});

module.exports = mongoose.model('UserDetail', userDetailSchema);
