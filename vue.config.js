const StyleLintPlugin = require('stylelint-webpack-plugin');
module.exports = {
    devServer: {
        compress: true,
        overlay: {
            errors: true,
            warnings: false,
        },
    },
    configureWebpack: {
        plugins: [
            new StyleLintPlugin({
                files: ['**/*.{vue,css,scss}'],
                fix: true,
            }),
        ],
    },
};
