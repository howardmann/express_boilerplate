var User = require('../models/User');

exports.index = function(req, res, next) {
  User
    .query()
    .orderBy('age', 'desc')
    .eager('posts')
    .then(function(data){
      res.render('users/index', {
        users: data
      });
    }, next);
};

exports.show = function(req, res, next) {
  User
    .query()
    .findById(req.params.id)
    .eager('posts')
    .then(function(data){
      res.render('users/show', data);
    }, next);
};

exports.new = function(req, res, next) {
  res.render('users/new');
};

exports.create = function(req, res, next) {
  User
    .query()
    .insert(req.body)
    .then(function(){
      res.redirect('users');
    }, next);
};

exports.edit = function(req, res, next) {
  User
    .query()
    .findById(req.params.id)
    .then(function(user){
      res.render('users/edit', user);
    }, next);
};

exports.update = function(req, res, next) {
  var id = req.params.id;
  User
    .query()
    .updateAndFetchById(id, req.body)
    .then(function(user){
      res.redirect(`/users/${id}`);
    }, next);
};

exports.destroy = function(req, res, next) {
  User
    .query()
    .deleteById(req.params.id)
    .then(function(){
      res.redirect('/users');
    }, next)
};
