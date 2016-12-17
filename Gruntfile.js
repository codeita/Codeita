module.exports = function(grunt) {

  grunt.initConfig({
	  pkg: require('./package.json'),
	  clean: {
		  dist:[__dirname+'/dist/**']
	  },
	  ace_builds: {
		  dist: {
			  options: {
				  tag:"v1.2.6"
			  },
			  path: __dirname+'/dist/ace-builds'
		  }
	  }
  });
  
  grunt.loadTasks('./tasks/grunt-ace-build');
  grunt.loadNpmTasks('grunt-contrib-clean');
  
  grunt.registerTask('default', ['clean:dist', 'ace_builds']);

};

