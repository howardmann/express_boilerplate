
exports.index = function(req, res, next) {
  res.send('index');
};

exports.show = function(req, res, next) {
  res.send('show');
};

exports.new = function(req, res, next) {
  res.send('new');
};

exports.create = function(req, res, next) {
  res.send('create');
};

exports.edit = function(req, res, next) {
  res.send('edit');
};

exports.update = function(req, res, next) {
  res.send('update');
};

exports.destroy = function(req, res, next) {
  res.send('destroy');
};
