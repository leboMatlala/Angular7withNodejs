'use strict';
console.log('appController')

var Users = require('../model/appModel.js');



exports.register_user = function (req, res) {
  var new_user = new Users(req.body);


  console.log(new_user)
  //handles null error
  if (!new_user.phoneno || !new_user.password) {
    res.status(400).send({ error: true, message: 'Please provide all your details' });

  }
  else {

    Users.registerUser(new_user, function (err, user) {

      if (err)
        res.send(err);
      res.json(user);
    });
  }
};
