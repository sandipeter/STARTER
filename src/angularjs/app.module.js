var app = angular.module('myApp', ['ngRoute'])

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when("/", {
			templateUrl: "angularjs/views/phone.html",
			controller: "AppCtrl",
			controllerAs: "app"
		}).when('/cookies', {
			redirectTo: function (routeParams, path, search){
				console.log(routeParams);
				console.log(path);
				console.log(search);
				return "/" + routeParams.cookieType;
			}
		})
		.when('/sugar', {
			template: 'Sugar cookie'
		})
		.otherwise({
			redirectTo: '/'
		})
}]);

app.controller('AppCtrl', ['$routeParams', function ($routeParams) {

	var self = this;
	self.message = "The app routing is working!"
}])
