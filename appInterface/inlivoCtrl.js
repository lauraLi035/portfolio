angular.module('portfolio', ['ui.bootstrap']);
angular.module('portfolio').controller('inlivoCtrl', function ($scope) {
  $scope.myInterval = 3000;
  var persona = $scope.personas = [
  {
    img: "../img/inlivo/persona1.jpg"
  },{
    img: "../img/inlivo/persona2.jpg"
  }];

    var slides = $scope.slides = [
  {
    img: "../img/inlivo/1.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/2.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/3.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/4.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/5.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/6.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/7.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/8.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/9.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/10.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/11.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/12.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/13.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/14.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/15.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/16.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/17.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/18.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/19.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/20.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/21.jpg",
    text: "start page"
  },{
    img: "../img/inlivo/22.jpg",
    text: "start page"
  }
  ];

});