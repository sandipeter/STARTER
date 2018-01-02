'use strict';

var app = angular.module('app', []);

app.controller('appController', ['$scope', function($scope) {

	$scope.author = {
		name: 'Sándi Péter'
	}
}]);
