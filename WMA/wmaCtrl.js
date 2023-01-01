angular.module('portfolio', ['ui.bootstrap']);
angular.module('portfolio').controller('wmaCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [
  {
    img: "../img/wma/userFlow.jpeg"
  },{
    img: "../img/wma/wireframe.jpg"
  }
  ];

})