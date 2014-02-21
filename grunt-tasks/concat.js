module.exports = {
    options: {
        separator: ';'
    },
    theme: {
        src: 'assets/js/theme/*.js',
        dest: 'assets/js/teq-theme.js'
    },
    modules: {
        files: [{
            expand: true,
            cwd: 'modules',
            src: ['**/*.js'],
            dest: 'modules',
            ext: '.concat.js'
        }]
    }
};