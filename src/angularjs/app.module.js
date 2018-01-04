var app = angular.module('app', []);

app.factory('messages', function () {

	var messages = {};

	messages.list = [];

	messages.add = function(message) {
		messages.list.push({id: messages.list.length, text: message});
	};

	return messages;


});

app.controller('ListCtrl', ['messages', function(messages){

	var self = this;
	self.messages = messages.list;

}]);

app.controller('PostCtrl', ['messages', function(messages){

	var self = this;
	self.addMessage = function(message){
		messages.add(message);
		self.newMessage = ''
	}

}]);
