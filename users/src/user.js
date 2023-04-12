const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'You must provide a user name'],
    validate: {
      validator: (name) => name.length > 2,
      message: 'Please enter a name of 3 character or more',
    },
  },
  postCount: Number,
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
