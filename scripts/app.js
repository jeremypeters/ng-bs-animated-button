'use strict';

var app = angular.module('demoApp', ['jp.ng-bs-animated-button']);

app.controller('demo1Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result = null;

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'success';
    }, 2000);
  };

});

app.controller('demo2Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result = null;

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'error';
    }, 2000);
  };

});

app.controller('demo3Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result       = null;

  $scope.options = {
    iconsPosition: 'right'
  };

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'success';
    }, 2000);
  };

});

app.controller('demo4Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result = null;

  $scope.options = {
    buttonDefaultClass: 'btn-default',
    buttonSubmittingClass: 'btn-info',
    buttonSuccessClass: 'btn-success'
  };

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'success';
    }, 2000);
  };

});

app.controller('demo5Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result = null;

  $scope.options = {
    buttonDefaultText: 'Lorem ipsum',
    buttonSubmittingText: 'Dolor sit amet',
    buttonSuccessText: 'Consectetur elit'
  };

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'success';
    }, 2000);
  };

});

app.controller('demo6Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result = null;

  $scope.options = {
    buttonSubmittingIcon  : 'fa fa-spinner',
    buttonSuccessIcon     : 'fa fa-smile-o'
  };

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'success';
    }, 2000);
  };

});

app.controller('demo7Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result = null;

  $scope.options = {
    animationCompleteTime: '5000'
  };

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'success';
    }, 2000);
  };

});