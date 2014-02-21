module.exports = {
    options: {
        livereload: false
    },
    sass: {
        files: ['**/*.scss'],
        tasks: ['compass:inte']
    },
    css: {
        files: ['assets/css/**/*.css'],
        tasks: ['autoprefixer']
    }
};