// http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
module.exports = function(grunt) {
    grunt.registerTask('helloWorld', 'Say hello!', function() {

        grunt.log.writeln("Hello world!");

    });
};