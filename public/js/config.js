app.config(['$routeProvider', 
function($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl:'views/index.html'
  })
  .when('/articles',{
    templateUrl:'views/articles/list.html'
  })
  .when('/articles/create',{
    templateUrl:'views/articles/create.html'
  })
  
  .otherwise('/');
}]);