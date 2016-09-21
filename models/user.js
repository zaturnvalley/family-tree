var mongoose = require('mongoose');
var postSchema = require('./schemas/post');

var userSchema = new mongoose.Schema({
  name: String, 
  email: {
    type: String,
    required: true,
    unique: true
  },
  meta: {
    age: Number,
    website: String
  },
  posts: [postSchema]
});

userSchema.methods.sayHello = function() {
  return 'Hi ' + this.name;
}

var User = mongoose.model('User', userSchema);

module.exports = User;