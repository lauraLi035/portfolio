angular.module('portfolio', ['ui.bootstrap']);
angular.module('portfolio').controller('littleSheepCtrl', function ($scope) {
  $scope.myInterval = 3000;
  var slides = $scope.slides = [
  {
    img: "../img/littleSheep/1.png",
    text: "mobile — gray layout wireframe to high fidelity"
  },{
    img: "../img/littleSheep/2.png",
    text: "tablet — gray layout wireframe"
  },{
    img: "../img/littleSheep/3.png",
    text: "tablet — high fidelity wireframe"
  },{
    img: "../img/littleSheep/4.png",
    text: "web — gray layout wireframe"
  },{
    img: "../img/littleSheep/5.png",
    text: "web — high fidelity wireframe"
  },{
    img: "../img/littleSheep/6.png",
    text: "sketches of wireframes"
  }
  ];
});