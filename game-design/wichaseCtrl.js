angular.module('portfolio', ['ui.bootstrap']);
angular.module('portfolio').controller('wichaseCtrl', function ($scope) {
  $scope.myInterval = 3000;
  var slides = $scope.slides = [
  {
    img: "../img/witchase/1.png",
    text: "start page"
  },{
    img: "../img/witchase/2.png",
    text: "story board"
  },{
    img: "../img/witchase/3.jpeg",
    text: "level 1 mission page"
  },{
    img: "../img/witchase/4.png",
    text: "level 1 game play"
  },{
    img: "../img/witchase/5.jpeg",
    text: "level 2 mission page"
  },{
    img: "../img/witchase/6.png",
    text: "level 2 game play"
  },{
    img: "../img/witchase/7.png",
    text: "level 3 game play"
  },{
    img: "../img/witchase/8.png",
    text: "level 4 game play"
  },{
    img: "../img/witchase/9.png",
    text: "level 5 game play"
  },{
    img: "../img/witchase/10.png",
    text: "progression map"
  }
  ];

    var sketchesSlides = $scope.sketchesSlides = [
  {
    img: "../img/witchase/sketches1.jpg",
    text: "game logic sketches"
  },{
    img: "../img/witchase/sketches2.jpg",
    text: "game and inventory interface"
  },{
    img: "../img/witchase/sketches3.jpg",
    text: "sketch of storyboard and progression map"
  },{
    img: "../img/witchase/sketches4.png",
    text: "digital game logic sketches"
  }
  ];

});