var app = angular.module('phoneApp', []);

app.controller('AppController', ['$scope', function($scope){
  $scope.leaveVoicemail = function(number, message){
    alert('Number: ' + number + ' said: ' + message);
  };
}]);

app.directive('phone', function(){
  return {
    restrict: 'E',
    scope: {
      number: '@',
      network: '=',
      makeCall: '&'
    },
    templateUrl: 'angularjs/views/phone.html',
    link: function(scope){
        scope.networks = ["Verizon", "AT&T", "Sprint"];
        scope.network = scope.networks[0];
      }
  };
});
