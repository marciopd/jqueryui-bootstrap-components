module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: 'dist',
      docs: 'docs/dist'
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: true
      },
      my_target: {
        files: {
          'dist/jqbscomp.min.js':['src/js/button.js', 'src/js/dropdownMenuList.js', 'src/js/buttonDropdown.js', 'src/js/navs.js', 'src/js/breadcrumb.js', 'src/js/badge.js', 'src/js/pageHeader.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'uglify']);

};
