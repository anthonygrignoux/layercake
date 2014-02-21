module.exports = {
    files: {
        src : [
            'assets/css/**/*.css',
            'assets/**/*.jpg',
            'assets/**/*.png',
            'assets/**/*.gif',
            'assets/js/**/*.js',
            '**/*.php'
        ]
    },
    options: {
        watchTask: true,
        server: {
            baseDir: "app"
        }
    }
};