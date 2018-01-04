function TestCtrl() {
  var self = this;
  self.myString = "hello world";
}

function CapitalizeFilter() {
	return function(text){
		return text.toUpperCase();
	}
}

angular.module('app', [])
.controller('TestCtrl', [TestCtrl])
.filter('capitalize', CapitalizeFilter);
