

angular.module('greetings', [])
.directive("welcome", [function() {
  return {
    restrict: "AE",
    template: "<div>Howdy there! You look splendid.</div>"
  }
}])

.directive("goodbye", [function(){
  return {
    restrict: "A",
    link: function(){
		alert("godbye");
	}
  }
}]);
