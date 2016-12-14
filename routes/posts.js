var Post = require('../models/Post');

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
  res.send('create');
};

exports.update = function(req, res, next) {
  res.send('update');
};

exports.destroy = function(req, res, next) {
  res.send('destroy');
};
