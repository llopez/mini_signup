var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://luis:postgres@localhost:5432/mini-signup");

module.exports = db;
