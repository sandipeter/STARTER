function TestCtrl($templateCache) {
	this.user = {
		name: 'Blake'
	};
	console.log($templateCache.get('test.html'));
}

angular.module('app', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
				controller: 'TestCtrl as test',
				templateUrl: 'test.html'
			})
			.otherwise('/');
	}])
	.controller('TestCtrl', ['$templateCache', TestCtrl]);


angular.module('app').run(['$templateCache', function ($templateCache){
  $templateCache.put('test.html', 'Hello {{ test.user.name }}!');
}]);
