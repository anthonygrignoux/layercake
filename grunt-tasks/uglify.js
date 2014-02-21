module.exports = {
    options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    theme: {
        files: {
            'assets/js/teq-theme.min.js': '<%= concat.theme.dest %>'
        }
    },
    modules: {
        files: [{
            expand: true,
            cwd: 'modules',
            src: ['**/*.js'],
            dest: 'modules',
            ext: '.min.js'
        }]
    }
};