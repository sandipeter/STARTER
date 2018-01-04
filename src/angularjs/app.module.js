function FunCtrl() {
	var self = this;

	self.start = function () {
		console.log('started');
	}

	self.end = function () {
		console.log("Fun time is over.");
	}
}


var app = angular.module('coolApp', [])

app.controller('FunCtrl', [FunCtrl])

app.directive("entering", [function () {
	return function (scope, element, attrs) {
		element.bind("mouseenter", function () {
			scope.$apply(attrs.entering);
		})
	}
	}])
