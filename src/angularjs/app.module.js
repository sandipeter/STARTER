angular.module('expressionExample', [])
.controller('ExampleController', ['$window', '$scope', function($window, $scope) {
	$scope.name = 'World';
	$scope.greet = function(){
		$window.alert('valami');
	}
}]);
