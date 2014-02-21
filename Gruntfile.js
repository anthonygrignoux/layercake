// More maintainable Gruntfile
// http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html

function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;
    glob.sync('*', {cwd: path}).forEach(function(option) {
        key = option.replace(/\.js$/,'');
        object[key] = require(path + option);
    });
    return object;
}

module.exports = function(grunt) {

    // Load configuration files
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        env: process.env
    };
    grunt.util._.extend(config, loadConfig('./grunt-tasks/'));
    grunt.initConfig(config);

    // Load npm tasks
    require('load-grunt-tasks')(grunt);

    // Load custom tasks
    grunt.loadTasks('tasks');

    // Register task aliases
    grunt.registerTask('default', ['browser_sync','watch']);
    grunt.registerTask('js', ['concat:theme', 'clean:preUglify', 'uglify:theme', 'clean:postUglify']);
    grunt.registerTask('css_all', ['compass','autoprefixer']);
    grunt.registerTask('css_app', ['compass:app','compass:inte_clean','autoprefixer']);
    grunt.registerTask('css_inte', ['compass:inte','autoprefixer:inte']);
    grunt.registerTask('img', ['imagemin']);
    grunt.registerTask('theme', [
        'concat:theme',
        'clean:preUglify',
        'uglify:theme',
        'clean:postUglify',
        'compass:app',
        'compass:inte_clean',
        'autoprefixer',
        'imagemin:theme'
    ]);
};