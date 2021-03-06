module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: 'dist',
      docs: 'docs/dist',
      coverage: 'coverage'
    },
    "bower-install-simple": {
        options: {
            color: true
        },
        "prod": {
            options: {
                production: true
            }
        },
        "dev": {
            options: {
                production: false
            }
        }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: true
      },
      my_target: {
        files: {
          'dist/jqbscomp.min.js':['src/js/button.js', 'src/js/dropdownMenuList.js', 'src/js/buttonDropdown.js', 'src/js/tabpanel.js', 'src/js/navs.js', 'src/js/breadcrumb.js', 'src/js/badge.js', 'src/js/pageHeader.js', 'src/js/alert.js', 'src/js/listGroup.js', 'src/js/listGroupLinkedItens.js', 'src/js/listGroupButtonItens.js']
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

  // Default task(s).
  grunt.registerTask('default', ['clean', "bower-install-simple", 'uglify', 'cssmin', 'karma']);

};
