function TestCtrl() {
	var self = this;
	self.myString = "hello world";

	self.people = [
		{
			name: "Eric Simons",
			born: "Chicago"
      },
		{
			name: "Albert Pai",
			born: "Taiwan"
      },
		{
			name: "Matthew Greenster",
			born: "Virginia"
      }
    ];

}

function CapitalizeFilter() {
	return function (text) {
		return text.toUpperCase();
	}
}

angular.module('app', [])
	.controller('TestCtrl', [TestCtrl])
	.filter('capitalize', CapitalizeFilter);
