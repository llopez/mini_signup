var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(morgan('combined'));

var User = require('./models/user.js')
var UserValidator = require('./models/user_validator.js');

app.get('/new', function(req, res){
  res.render('new');
});

app.get('/', function(req, res){
  res.render('index');
});

var validator = function(req, res, next){
  UserValidator.validate(req.body, function(err){
    if(Object.keys(err).length > 0) 
      return res.status(400).json({errors: err});
    else
     next();
  });
}

app.post('/api/users', [validator, function(req, res){
  User.create(req.body, function(err, data){
    if(err) return res.status(400).json(err); 
    res.status(201).json(data);
  });
}]);

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

