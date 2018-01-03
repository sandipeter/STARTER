'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('My app', function () {

	beforeEach(function () {
		browser.get('index.html');
	});

	it('should calculate expression in binding', function () {
		if (browser.params.browser === 'safari') {
			// Safari can't handle dialogs.
			return;
		}
		element(by.css('[ng-click="greet()"]')).click();

		// We need to give the browser time to display the alert
		browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000);

		var alertDialog = browser.switchTo().alert();

		expect(alertDialog.getText()).toEqual('Hello World');

		alertDialog.accept();
	});


});
