var express = require('express');
var bodyParser = require('body-parser');
var User = require('./models/user')
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
mongoose.connect('mongodb://localhost/family-tree');

var zach = new User({
  name: 'Zach',
  email: 'zach@zach.com',
  meta: {
    age: 30,
    website: 'zach.com'
  }
});

app.get('/', function(req, res) {
  User.findOne({}, function(err, user) {
    res.json(user.sayHello());
  });
  res.json(zach);
});

app.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

app.post('/users', function(req, res) {
  User.create(req.body, function(err, user){
    res.json(user)
  });
});

app.delete('/users/:id', function(req, res) {
  User.remove({_id: req.params.id}, function(err, user){
    res.send('User Deleted');
  });
});
app.listen(3000);