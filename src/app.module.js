'use strict';

var app = angular.module('app', []);

app.controller('appController', ['$scope', function appController($scope) {

	$scope.author = {
		name: 'Sándi Péter'
	};
}]);
