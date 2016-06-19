var db = require('../db.js')

var UserValidator = function(data){
  this.data = data;
}

UserValidator.validate = function(data, callback){
  if(data.first_name == "")
    callback(null)
  else
    callback({first_name: 'blank'});
}

module.exports = UserValidator;

