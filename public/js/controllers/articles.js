angular.module('mean').controller('ArticlesController',['$scope','Articles'
function($scope,Articles){
  $scope.test='123123';
  
  $scope.find=function(){
    Articles.query(function(articles){
      $scope.articles=articles;
    });
  };
}]);