//jshint strict: false
module.exports = function (config) {
	config.set({

		basePath: './src',

		files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',


      	'**/*.module.js',
		'**/*.component.js',
		'**/*.filter.js',
		'**/*.service.js',
		'**/*.spec.js'

      //'*!(.module|.spec).js',
      //'!(bower_components)/**/*!(.module|.spec).js',
      //'**/*.spec.js'
    ],

		autoWatch: true,

		frameworks: ['jasmine'],

		port: 9876,

		colors: true,

		logLevel: config.LOG_INFO,

		browsers: ['Chrome', 'Firefox'],

		plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

	});
};
