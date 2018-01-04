var app = angular.module('app', []);

app.controller('ExampleController', [function () {

	var self = this;

	self.master = {};

	self.update = function (user) {
		self.master = angular.copy(user);
	};

	self.reset = function () {
/*		if (form) {
			form.$setPristine();
			form.$setUntouched();
		}*/
		self.user = angular.copy(self.master);
	};

	self.reset();
    }]);
