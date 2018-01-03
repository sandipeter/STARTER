'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('My app', function () {

	beforeEach(function () {
		browser.get('index.html');
	});

	it('should allow user expression testing', function () {
		element(by.css('.expressions button')).click();
		var list = element(by.css('.expressions ul')).all(by.repeater('expr in exprs'));
		expect(list.count()).toBe(1);
		expect(list.get(0).getText()).toEqual('[ X ] 3*10|currency => $30.00');
	});


});
