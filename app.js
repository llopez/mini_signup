var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

var User = require('./models/user.js')
var UserValidator = require('./models/user_validator.js');

app.get('/new', function(req, res){
  res.render('new');
});

app.get('/', function(req, res){
  res.render('index');
});

app.post('/api/users', function(req, res){

  UserValidator.validate(req.body, function(err){

    if(err) return res.status(400).json(err); 

    User.create(req.body, function(err, data){
      if(err) return res.status(400).json(err); 
      res.json(data);
    });  

  });


});

app.get('/api/users/:id', function(req, res){
  User.findById(req.params.id, function(err, data){
    if(err) return res.json(err); 
    res.json(data);
  });
});

app.get('/api/users', function(req, res){
  User.findAll(function(err, data){
    if(err) return res.json(err); 
    res.json(data);
  });
});

app.listen(3000, function () {
  console.log('listening on port 3000');
});

