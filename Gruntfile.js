const sass = require('node-sass');


module.exports = function(grunt) {
  require('jit-grunt')(grunt);


    grunt.initConfig({
      sass: {
            dist: {
              options: {
                sourcemap: 'none',
                implementation: sass,
              },
              files: [{
                  expand: true,
                  cwd: '_assets/css/sass',
                  src: ['**/condor-gaming.scss'],
                  dest: '_assets/css',
                  ext: '.css'
              }]
            },
          },
      watch: {
        styles: {
          files: ['_assets/**/*.scss'],
          tasks: ['sass'],
          options: {
            nospawn: true
          }
        },
        script: {
          files: ['_assets/**/*.js'],
          options: {
            nospawn: true
          }
        },
      },
      browserSync: {
          dev: {
              bsFiles: {
                  src : [
                    '**/**.css',
                    '**/**.scss',
                    '**/**.js',
                    '**/**.html'
                  ]
              },
              options: {
                  server: {
                      baseDir: "./"
                  },
                  watchTask: true
              }
          }
      }                                                                                                                                                                                                                                                             
    });

  	grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['sass', 'browserSync', 'watch']);

};