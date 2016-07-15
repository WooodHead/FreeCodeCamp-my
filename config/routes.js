

module.exports = function (app) {
	var users = require('../app/controllers/users');
	app.get('/signup', users.signup);

	var index = require('../app/controllers/index');
	app.get('/', index.render);
	app.get('/test', function (req, res) {
		res.send('test');
	});

	var articles = require('../app/controllers/articles');
	app.get('/articles', articles.all);
  app.get('/articles/:articleId', articles.show);
  
  app.param('articleId', articles.article);
};
