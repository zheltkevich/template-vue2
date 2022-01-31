const StyleLintPlugin = require('stylelint-webpack-plugin');
module.exports = {
    configureWebpack: {
        plugins: [
            new StyleLintPlugin({
                files: ['**/*.{vue,css,scss}'],
                fix: true,
            }),
        ],
    },
};
