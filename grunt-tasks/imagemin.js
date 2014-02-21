module.exports = {
    options: {
        optimizationLevel: 3
    },
    theme: {
        css: {
            files: [{
                expand: true,
                cwd: 'assets/css/images/',
                src: ['**/*.{png, jpg, gif}'],
                dest: 'assets/css/images/'
            }]
        },
        html: {
            files: [{
                expand: true,
                cwd: 'assets/media/',
                src: ['**/*.{png, jpg, gif}'],
                dest: 'assets/media/'
            }]
        }
    },
    modules: {
        files: [{
            expand: true,
            cwd: 'modules/',
            src: ['**/*.{png, jpg, gif}'],
            dest: 'modules/'
        }]
    }
};