'use strict';

describe('appController - TEST', function () {

	beforeEach(module('myApp'));
	var scope = {};

	beforeEach(inject(function($controller){
			$controller('MyController', {$scope: scope});
	}));

	it('should create an array with objects in it (3)', function () {
		expect(scope.spices.length).toBe(3);
	});

	it('should create an array with objects in it (3)', function () {
		expect(scope.spice).toBe('habanero');
	});

});
