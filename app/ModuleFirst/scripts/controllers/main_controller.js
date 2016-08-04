angular.module('hackathonApp')
  .controller('MainCtrl', function ($scope,Names) {

 $scope.greeting = "hello cool ! how are you" ;



Names.getList().then(function(data){

alert(data[0].name);
});


  });
