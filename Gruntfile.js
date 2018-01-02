module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! Copy <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: [
                    'src/bower_components/jquery/dist/jquery.min.js',
                    'src/bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'src/bower_components/angular/angular.js',
					'src/angularjs/app.module.js'
                    ],
                dest: 'build/js/all.js'
            }
        },
        watch: {
            scripts: {
                files: ['src/angularjs/**/*.js', 'src/**/*.html', 'src/css/**/*.css', 'Gruntfile.js'],
                tasks: ['dev'],
                options: {
                    spawn: false
                }
            }
        },
        clean: ["build/**"],
        copy: {
            main: {
                files: [
      // includes files within path
                    {
                        expand: true,
                        cwd: "src/",
                        src: ['**/*.html'],
                        dest: 'build/',
                        filter: 'isFile'
                    }
                ]
            }
        },
        jshint: {
            options: {
                "curly": true,
                "eqnull": true,
                "eqeqeq": true,
                "undef": true,
                "globals": {
                    "jQuery": true,
                    "console": true,
                    "module": true
                }
            },
            all: ['Gruntfile.js', 'src/js/*.js']
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/css/all.min.css': [
                        'src/bower_components/bootstrap/dist/css/bootstrap.min.css',
                        'src/bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                        'src/css/**/*.css'
                    ]
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dev', ['clean', 'copy', 'uglify', 'cssmin']);

};
