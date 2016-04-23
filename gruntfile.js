module.exports = function(grunt) {


	/* 
	 *  Configure main project settings
	 */

	grunt.initConfig({
		// Basic settings and info about our pluggins
		pkg: grunt.file.readJSON('package.json'),


		/* Stylus - All the stylus modules will be added to a single stylus.css file. */
        stylus: {
            compile: {
                options: {
                    'compress': false,
                    'linenos': false, // set to 'true' WITH QUOTES to turn line numbers on
                    'paths': [ 'common/src/stylus' ],
                    'include css': true,
                    'use': [ require('nib') ],
                    'import': [ 'nib' ]
                },
                files: {
                    'src/common/css/modules/stylus.css': 'src/common/stylus/config.styl',
                }
            }
        },

        /* CSSLint - Checks errors on the compiled CSS file */
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            src: [ 'src/common/css/stylus.css']
        },


        /* Jshint - Check for errors on the compiled js file */
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'gruntfile.js',
                'src/common/js/modules/*.js' // check only the modules, not the libraries.
            ]
        },

		/* Clean - Erases the concatenated CSS and JS files to reload them again. */
        clean: {
            options: {
                'no-write': false // If true, will log messages of what would happen if the task was ran but doesn't actually delete the files.
            },
            jslibs: {
                src: [ 'src/common/js/*.js']
            },
            Css: {
                src: [ 'src/common/css/*.css']
            }
        },

		/* Concat - Concatenates all the CSS files and all JS files in only 2 different files. */
        concat: {
            distJS: {
                src: [
                    'src/common/js/libs/jquery*.js', // ensure jQuery is first
                    'src/common/js/libs/tiny.min.js', // Needed for chico
                    'src/common/js/libs/chico.min.js', // all libs and modules in a single js file
                    'src/common/js/{,*/}*.js', // all libs and modules in a single js file
                ],
                dest: 'src/common/js/app.js'
            },
            distCSS: {
                src: [
                    'src/common/css/{,*/}*.css', // all libs and modules in a single CSS file
                ],
                dest: 'src/common/css/app.css'
            }            
        },


		/* Cssmin - Minifies the concatenated CSS file */
		cssmin: {
			dist: {
				files: {
					'src/common/css/app.min.css': 'src/common/css/app.css'
				}
			}
		},

		/* Uuglify - Minifies the concatenated JS file */
		uglify: {
			dist: {
				files: {
					'src/common/js/app.min.js': ['src/common/js/app.js']
				}
			}
		},

		/* Htmlmin - Minifies the main Html file */
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'src/index.min.html': 'src/index.html', 
				}
			}
		},

		/* Imagemin - Minifies the sizes of the images. */
        imagemin: {
            distCommon: {
                files: [{
                    expand: true,
                    cwd: 'src/common/img',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: 'src/common/img'
                }]
            },
            distLocal: {
                files: [{
                    expand: true,
                    cwd: 'src/locale-assets',
                    src: '*.{png,jpg,jpeg}',
                    dest: 'src/locale-assets'
                }]
            }
        }

	});

	
	/* 
	 *  Load the plugins
	 */ 
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-jshint');	
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');	
	grunt.loadNpmTasks('grunt-contrib-concat');		
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');


	/* 
	 *  Execute tasks
	 */ 
	grunt.registerTask('default', ['stylus','csslint','jshint','clean','concat','cssmin','uglify']);
	grunt.registerTask('build', ['imagemin','htmlmin']);


};