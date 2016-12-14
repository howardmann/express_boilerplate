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
