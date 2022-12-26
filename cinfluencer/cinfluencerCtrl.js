angular.module('portfolio', ['ui.bootstrap']);
angular.module('portfolio').controller('cinfluencerCtrl', function ($scope) {
  $scope.myInterval = 3000;
  var slides = $scope.slides = [
  {
    img: "../img/cinfluencer/slider/1.jpg"
  },{
    img: "../img/cinfluencer/slider/2.jpg"
  },{
    img: "../img/cinfluencer/slider/3.jpg"
  },{
    img: "../img/cinfluencer/slider/4.jpg"
  },{
    img: "../img/cinfluencer/slider/5.jpg"
  },{
    img: "../img/cinfluencer/slider/6.jpg"
  }
  ];

});

