/* License: MIT.
 * Copyright (C) 2016, Gil Fink.
 */

'use strict';

module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'angular-indexed-db.js'
            ]
        },
        uglify: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: {
                    'angular-indexed-db.min.js': 'angular-indexed-db.js'
                }
            }
        }
    });

    grunt.registerTask('build', [
        'uglify'
    ]);

    grunt.registerTask('default', ['build']);
};