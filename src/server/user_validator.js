var UserValidator = function(data){
  this.data = data;
  this.errors = {};
}

UserValidator.prototype.data = {};

UserValidator.prototype.validatePresence = function(attr){
  if(this.data[attr] == ""){
    if(this.errors[attr] === undefined) this.errors[attr] = [];
    this.errors[attr].push('blank');
  }
  return this;
}

UserValidator.prototype.validateNumber = function(attr){
  if(isNaN(this.data[attr])){
    if(this.errors[attr] === undefined) this.errors[attr] = [];
    this.errors[attr].push('NaN');
  }
  return this;
}

UserValidator.validate = function(data, callback){
  var validator = new UserValidator(data);

  validator.validatePresence('firstName')
  .validatePresence('lastName')
  .validatePresence('age')
  .validateNumber('age');

  callback(validator.errors);
}

module.exports = UserValidator;

