module.exports = {
    options: {
        relativeAssets: true,
        noLineComments: true,
        force:          true
    },
    inte: {
        options: {
            cssDir:         'assets/css',
            sassDir:        'assets/sass',
            imagesDir:      'assets/css/images',
            fontsPath:      'assets/css/fonts',
            javascriptsDir: 'assets/js',
            outputStyle:    'expanded',
            debugInfo:      true
        }
    },
    clean: {
        options: {
            cssDir:         'assets/css',
            sassDir:        'assets/sass',
            imagesDir:      'assets/css/images',
            fontsPath:      'assets/css/fonts',
            javascriptsDir: 'assets/js',
            outputStyle:    'expanded'
        }
    },
    dev: {
        options: {
            cssDir:         '../../app/wp-content/themes/eramet/assets/css',
            sassDir:        'assets/sass',
            imagesDir:      '../../app/wp-content/themes/eramet/assets/css/images',
            fontsPath:      '../../app/wp-content/themes/eramet/assets/css/fonts',
            javascriptsDir: '../../app/wp-content/themes/eramet/assets/js',
            outputStyle:    'expanded',
            debugInfo:      false
        }
    }
};