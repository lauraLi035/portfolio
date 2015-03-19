angular.module('portfolio', ['ui.bootstrap']);
angular.module('portfolio').controller('inlivoCtrl', function ($scope) {
  $scope.myInterval = 3000;
  var persona = $scope.personas = [
  {
    img: "../img/inlivo/persona1.jpg"
  },{
    img: "../img/inlivo/persona2.jpg"
  }];

  //   var sketchesSlides = $scope.sketchesSlides = [
  // {
  //   img: "../img/witchase/sketches1.jpg",
  //   text: "game logic sketches"
  // },{
  //   img: "../img/witchase/sketches2.jpg",
  //   text: "game and inventory interface"
  // },{
  //   img: "../img/witchase/sketches3.jpg",
  //   text: "sketch of storyboard and progression map"
  // },{
  //   img: "../img/witchase/sketches4.png",
  //   text: "digital game logic sketches"
  // }
  // ];

});