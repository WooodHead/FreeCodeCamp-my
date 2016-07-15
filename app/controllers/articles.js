var mongoose = require('mongoose');
var Article = mongoose.model('Article');

exports.article = function (req,res,next,id) {
Article.load(id, function(err,article){
  if(err) return next(err);
  if(!article) return next(new Error('Failed to load article '+id));
  next();
});
};

exports.show = function (req, res) {
	res.jsonp(req.article);
};

exports.all = function (req, res) {
	Article.find()
	.exec(function (err, articles) {
		if (err) {
			res.render('error', {
				status : 500
			});
		} else {
			res.json(articles);
		}
	});
};
