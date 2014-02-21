module.exports = {
    theme: ['<%= concat.theme.src %>'],
    modules: {
        files: [{
            expand: true,
            cwd: 'modules',
            src: ['**/*.js']
        }]
    }
};