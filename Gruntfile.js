var _ = require('underscore');

module.exports = function (grunt) {
    "use strict";

    var ibevanmeenen;

    ibevanmeenen = {
        'js':   ['js/**/*.js', '!vendor/**/*.js', 'Gruntfile.js'],
        'scss': ['scss/**/*.scss'],
        'html': ['**/*.html'],
        'img':  ['img/**/*.{png,jpg,jpeg,gif,webp}'],
        'svg':  ['img/**/*.svg']
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            ibevanmeenenJs: {
                files: ibevanmeenen.js,
                tasks: 'jshint:ibevanmeenen'
            },
            ibevanmeenenScss: {
                files: ibevanmeenen.scss,
                tasks: 'sass'
            },
            ibevanmeenenImages: {
                files: ibevanmeenen.img,
                tasks: ['imagemin:ibevanmeenen'],
                options: {
                    event: ['added', 'changed']
                }
            },
            ibevanmeenenSvg: {
                files: ibevanmeenen.svg,
                tasks: ['svg2png:ibevanmeenen'],
                options: {
                    event: ['added', 'changed']
                }
            },
            livereload: {
                files: ['build/css/style.css', ibevanmeenen.js, ibevanmeenen.html, ibevanmeenen.img, ibevanmeenen.svg],
                options: {
                    livereload: true
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    livereload: true,
                    open: true
                }
            }
        },

        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'build/css/style.css': 'scss/style.scss'
                }
            }
        },

        jshint: {
            options: {
                camelcase: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                forin: true,
                indent: 4,
                trailing: true,
                undef: true,
                browser: true,
                devel: true,
                node: true,
                globals: {
                    jQuery: true,
                    $: true
                }
            },
            ibevanmeenen: {
                files: {
                    src: ibevanmeenen.js
                }
            }
        },

        imagemin: {
            ibevanmeenen: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'img',
                    src: '**/*.{png,jpg,jpeg,gif,webp}',
                    dest: 'img'
                }]
            }
        },

        svg2png: {
            ibevanmeenen: {
                files: [{
                    src: ibevanmeenen.svg
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-svg2png');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('serve', [
        'connect',
        'watch'
    ]);

    grunt.registerTask('default', ['serve']);
    grunt.registerTask('build', ['sass']);

};
