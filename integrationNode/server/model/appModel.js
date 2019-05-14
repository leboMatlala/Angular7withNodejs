'user strict';
var sql = require('./database.js');

usersdetails=[];



console.log('appModel')

//Task object constructor
var User = function (user) {
    this.phoneno= user.phoneno;
    this.password= user.password;
    this.created_at = new Date();

    console.log(this.phoneno, this.password, this.created_at)
};

User.registerUser = function registerUser(newUser, result) {

  console.log('newUser', newUser)
  sql.query("INSERT INTO ejoobi set ?", newUser, function (err, res) {

      if (err) {
          console.log("error: ", err);
          result(err, null);
      }
      else {
          console.log(res.insertId);
          result(null, res.insertId);
      }
  });
};


