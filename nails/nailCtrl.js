angular.module('portfolio', ['ui.bootstrap']);
angular.module('portfolio').controller('nailCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [
  {
    img: "../img/nails/gif/front.gif"
  },{
    img: "../img/nails/gif/1.gif"
  },{
    img: "../img/nails/gif/2.gif"
  },{
    img: "../img/nails/gif/3.gif"
  },{
    img: "../img/nails/gif/4.gif"
  },{
    img: "../img/nails/gif/5.gif"
  },{
    img: "../img/nails/gif/6.gif"
  }
  ];

});

