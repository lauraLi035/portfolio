angular.module('portfolio', ['ui.bootstrap']);
angular.module('portfolio').controller('recycoreCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [
  {
    img: "../img/gif/front.gif"
  },{
    img: "../img/gif/1.gif"
  },{
    img: "../img/gif/2.gif"
  },{
    img: "../img/gif/3.gif"
  },{
    img: "../img/gif/4.gif"
  },{
    img: "../img/gif/5.gif"
  },{
    img: "../img/gif/6.gif"
  }
  ];

});

