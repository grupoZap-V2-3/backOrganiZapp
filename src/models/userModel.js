const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  gender: {
    type: String,
    enum: ['male', 'female']
  }
});
const User = mongoose.model('User', userSchema);

module.exports = User;