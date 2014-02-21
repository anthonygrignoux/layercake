module.exports = {
    replace_app: {
        options: {
            globals: {
                var1: 'wp-content/themes/eramet/assets/js/libs/'
            }
        },
        files: [
            {src: 'assets/css/*.css', dest: '../../app/wp-content/themes/eramet/', expand: true}
        ]
    },
    replace_inte: {
    }
};