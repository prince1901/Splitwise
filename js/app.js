var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $scope.display = function()
    {
      $scope.data = window.data.bills;
      $scope._length = $scope.data.length-1;
      $scope.names = $scope.data[$scope._length].persons;
      $scope.currentbill = $scope.data[$scope._length];
    }
        $scope.addperson = function()
    {
        $scope.count++;
    }
    $scope.nextRecord = function()
    {
      $scope._length= $scope._length-1;
      $scope.names = $scope.data[$scope._length].persons;
      $scope.currentbill =$scope.data[$scope._length];
    }
});
