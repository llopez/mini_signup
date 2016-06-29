var db = require('./db.js')

var User = function(data){
  this.data = data;
}

User.prototype.data = {};

User.prototype.set = function(attr, value){
  return this.data[attr] = value;
}

User.prototype.get = function(attr){
  return this.data[attr];
}

User.findById = function(id, callback){
  db.one("SELECT * FROM users WHERE id = $1", id)
    .then(function(data){
      callback(null, new User(data));
    }).catch(function(err){
      callback(err, null);
    });
}

User.findAll = function(callback){
  db.many("SELECT * FROM users")
    .then(function(data){
      var collection = data.map(function(x){
        return new User(x);
      });
      callback(null, collection);
    }).catch(function(err){
      callback(err, null);
    });
}

User.create = function(data, callback){
  db.none("INSERT INTO users (first_name, last_name, age) VALUES (${firstName},${lastName},${age})", data)
    .then(function(){
      callback(null, data);
    }).catch(function(err){
      callback(err, null);
    }); 
}

module.exports = User;

