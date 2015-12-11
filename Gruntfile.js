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
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: true
      },
      my_target: {
        files: {
          'dist/jqbscomp.min.js':['src/js/button.js', 'src/js/dropdownMenuList.js', 'src/js/buttonDropdown.js', 'src/js/navs.js', 'src/js/breadcrumb.js', 'src/js/badge.js', 'src/js/pageHeader.js', 'src/js/alert.js', 'src/js/listGroup.js', 'src/js/listGroupLinkedItens.js', 'src/js/listGroupButtonItens.js']
        }
      }
    },
    cssmin: {
       dist: {
         files: {
           'dist/jqbscomp.min.css': ['src/css/*.css']
         }
       }
    },
    karma: { 
        unit: { 
            configFile:'karma.conf.js'
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'karma']);

};
