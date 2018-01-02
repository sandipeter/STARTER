'use strict';

describe('appController - TEST', function () {

	beforeEach(module('app'));

	it('should create an object with a string variable', inject(function ($controller) {
		var scope = {};
		var ctrl = $controller('appController', {
			$scope: scope
		});

		expect(scope.author.name).toBe('Sándi Péter');
	}));

});
