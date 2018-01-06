var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');

const formSettings = [
  {key: "firstName", label: "Keresztnév", type: "text"},
  {key: "lastName", label: "Vezetéknév", type: "text"},
  {key: "email", label: "Email cím", type: "text"},
  {key: "password", label: "Jelszó", type: "text"},
  {key: "address", label: "Cím", type: "text"},
  {key: "phone", label: "Telefon", type: "text"},
  {key: "age", label: "Életkor", type: "text"}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.find({}, (err, data) => {
    res.render('users', {users: data});
  });
});

/* GET details/user._id */
router.get('/details/:id', function(req, res, next) {
  userModel.findOne({_id: req.params.id}, (err, data) => {
    res.render('user-details', {user: data, settings: formSettings});
  });
});

/* GET delete/user._id */
router.get('/delete/:id', function(req, res, next) {
  res.json({siker: req.params.id});
});

/* POST details/user._id */
router.post('/details/:id', function(req, res, next) {
  userModel.findOneAndUpdate(
    {_id: req.params.id}, 
    { $set: req.body },
    {new: true, overwrite: true}, 
    function(err, doc){
      if(err){
          console.log("Something wrong when updating data!");
      }

      res.render('user-details', {user: doc, settings: formSettings});
});

});

module.exports = router;



/*var user = new userModel({
    firstName: "László",
    lastName: "Kiss", 
    email: "kl@gmail.com",
    password: "jelszo",
    address: "Bp 1225, Nagy u. 10."
  });
  user.save((err) => {
    if (err) {
      return console.error(err);
    } 
    console.log("user saved", user);
  });*/
