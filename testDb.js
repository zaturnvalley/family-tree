var mongoose = require('mongoose');
var User = require('./models/user');
var postSchema = require('./models/schemas/post');

var Post = mongoose.model('Post', postSchema);

mongoose.connect('mongodb://localhost/family-tree');

// var user = {
//   name: 'Krillin',
//   email: 'K-real@dbz.com',
//   posts : [
//     {
//       title: 'Cell',
//       content: 'Glad we finally saved the world by getting rid of Cell.'
//     }
//   ]
// }
// User.create(user, function (err,user) {
//   console.log(user);
// });

// User.findOne({name: 'Krillin'}, function(err, user) {
//   console.log(user.posts.id('57e1a2eda31a0bcfc9944328'));
//   user.posts.push({title: 'Day I Met Goku', content: 'I thought I was stronger than him. Boy, was I wrong!'});
//   user.save();
// });

// User.findOne({name: 'Goku'}, function(err, user) {
//   var newPost = {
//     title: "I'm glad I met Krillin", 
//     content: "He's such a good friend. Always been there for me.",
//     author: user._id
//   }

//   Post.create(newPost, function(err, post) {
//     console.log('Created new post for Goku');
//   });
// });

Post.findOne({title: "I'm glad I met Krillin"}).populate('author').exec(function(err,post) {
  console.log(post);
});