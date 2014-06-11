module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    vulcanize: {
      default: {
        options: {
          csp: true,
          inline: true
        },
        files: {
          'elements.vulcanized.html': 'elements.html'
        }
      }
    },
    uglify: {
      default: {
        files: {
          'elements.vulcanized.js': [
            'elements.vulcanized.js',
            'app.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-vulcanize');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['vulcanize', 'uglify']);

};
