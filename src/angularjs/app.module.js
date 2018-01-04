var app = angular.module('app', [])


app.factory('getData', ['$timeout', '$q', function getData($timeout, $q) {
	return function () {


		var defer = $q.defer()
		// simulated async function
		$timeout(function () {
			if (Math.round(Math.random())) {
				defer.resolve('data received!')
			} else {
				defer.reject('oh no an error! try again')
			}
		}, 2000)

		return defer.promise;
	}
}]);

app.controller('myCtrl', ['getData', function (getData) {
	var promise = getData().then(function (data) {
		console.log(data);
	}, function (error) {
		console.log(error)
	}).finally(function () {
		console.log('Finished at:', new Date())
	})
}]);
