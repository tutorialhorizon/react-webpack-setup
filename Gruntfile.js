module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.config( 'webpack', require('./grunt/webpack.js') );
  grunt.config( 'sass', require('./grunt/sass.js') );
  grunt.config( 'watch', require('./grunt/watch.js') );
  grunt.config( 'jshint', require('./grunt/jshint.js') );
  grunt.config( 'clean', require('./grunt/clean.js') );

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('dev', ['clean', 'sass', 'webpack:dev']);
  grunt.registerTask('preRelease', ['clean', 'sass', 'webpack:preRelease']);

};
