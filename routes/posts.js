var Post = require('../models/Post');
var User = require('../models/User');

exports.index = function(req, res, next) {
  Post
    .query()
    .eager('user')
    .then(function(posts){
      res.json(posts);
    }, next)
};

exports.show = function(req, res, next) {
  Post
    .query()
    .findById(req.params.id)
    .eager('user')
    .then(function(post){
      res.json(post);
    }, next)
};

exports.create = function(req, res, next) {
  Post
    .query()
    .insertAndFetch(req.body)
    .then(function(post){
      res.json(post);
    }, next)
};

exports.update = function(req, res, next) {
  Post
    .query()
    .updateAndFetchById(req.params.id, req.body)
    .then(function(post){
      res.json(post);
    }, next)
};

exports.destroy = function(req, res, next) {
  Post
    .query()
    .deleteById(req.params.id)
    .then(function(){
      res.send('deleted');
    }, next)
};

// Non API user nested routes for associations
exports.newUser = function(req, res, next) {
  User
    .query()
    .findById(req.params.id)
    .then(function(user){
      res.render('posts/new', user);
    }, next)
};

exports.createUser = function(req, res, next) {
  var user_id = req.params.id;
  User
    .query()
    .findById(user_id)
    .then(function(user){
      return user
        .$relatedQuery('posts')
        .insert(req.body);
    })
    .then(function(post){
      res.redirect(`/users/${user_id}`);
    }, next);
};
