function testService($http){
	this.get = function(){
		return $http.get('http://test-routes.herokuapp.com/test/hello')
			.then(function(res){
			return res.data.message;
		})
	}
	this.upperCase = function(data){
		return $http.post('http://test-routes.herokuapp.com/test/uppercase', data)
	}
}

function TestCtrl(testService){
	var self = this;
	testService.get().then(function(res){
		self.message = res;
		console.log(res);
	})

	self.postData = function(message){
		testService.upperCase({message: message})
		.success(function(body){
			self.sendMessage = body.message;
		})
	}

}


var app = angular.module('app', [])

app.service('testService', ['$http', testService])
app.controller('TestCtrl', ['testService', TestCtrl])

