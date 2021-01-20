module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      lib: {
        files: [
	  { 
            dest:'<%= dst %>/<%= pkg.lib %>.js',
            src: ['src/*.js'],
          },
        ],
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['src/*.js'],
        dest: '<%= dst %>/<%= pkg.lib %>.min.js',
      }
    },
    dst: '<%= pkg.dst %>',
  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['concat','uglify']);

};

