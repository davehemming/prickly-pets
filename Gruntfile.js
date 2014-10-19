module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      options: { livereload: true },
      myFiles: {
        files: ['**']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};