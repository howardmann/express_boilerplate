var User = require('../models/User');

exports.index = function(req, res, next) {
  User
    .query()
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
  res.send('create');
};

exports.edit = function(req, res, next) {
  res.render('users/edit');
};

exports.update = function(req, res, next) {
  res.send('update');
};

exports.destroy = function(req, res, next) {
  res.send('destroy');
};
