'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('My app', function () {

	beforeEach(function () {
		browser.get('index.html');
	});

	it('should test service', function () {
		expect(element(by.id('simple')).element(by.model('message')).getAttribute('value'))
			.toEqual('test');
	});


});
