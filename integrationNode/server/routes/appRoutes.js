'use strict';
console.log('appRoutes')
// const express = require('express');
// const router = express.Router();
// //var usersList = require('../controller/appController');
// //GET ROUTES
// router.get('/',(req,res)=>{
//   res.send('application works');
// });


// module.exports = router;

module.exports = function (app) {
  var userList = require('../controller/appController');

  // app.route('/',(req,res)=>{
  //   res.send('application works');
  //   console.log('application works');

  // });

  // todoList Routes
  app.route('/register')
      .post(userList.register_user);
};
