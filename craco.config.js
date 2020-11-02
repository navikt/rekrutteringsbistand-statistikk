const path = require('path');
const buildPath = path.resolve(__dirname, './build');
const CracoLessPlugin = require('craco-less');
const cssprefixer = require('postcss-prefix-selector');

const RemoveCssHashPlugin = {
    overrideWebpackConfig: ({ webpackConfig }) => {
        const plugins = webpackConfig.plugins;
        plugins.forEach((plugin) => {
            const options = plugin.options;

            if (!options) {
                return;
            }

            if (options.filename && options.filename.endsWith('.css')) {
                console.log('rewriting target', options);
                options.filename = 'static/css/[name].css';
                options.chunkFilename = 'static/css/[name].chunk.css';
            }
        });

        return webpackConfig;
    },
};

const RemoveJsHashPlugin = {
    overrideCracoConfig: ({ cracoConfig }) => {
        cracoConfig.webpack = {
            configure: {
                optimization: {
                    splitChunks: {
                        cacheGroups: {
                            default: false,
                            vendors: false,
                        },
                    },
                    runtimeChunk: false,
                },
                output: {
                    path: buildPath,
                    filename: 'static/js/rekrutteringsbistand-statistikk.js',
                },
            },
        };

        return cracoConfig;
    },
};

module.exports = {
    style: {
        postcss: {
            plugins: [
                cssprefixer({
                    prefix: '.statistikk',
                    exclude: ['html', 'body', '.statistikk', '.utviklingsapp'],
                    transform: function (prefix, selector, prefixedSelector) {
                        if (selector.startsWith('body ')) {
                            return `body ${prefix} ${selector.slice(5)}`;
                        } else if (selector.startsWith('html ')) {
                            return `html ${prefix} ${selector.slice(5)}`;
                        } else if (selector.startsWith('.statistikk ')) {
                            return selector;
                        } else if (selector.includes('modal')) {
                            return selector;
                        }
                        return prefixedSelector;
                    },
                }),
            ],
        },
    },
    plugins: [
        { plugin: CracoLessPlugin },
        { plugin: RemoveCssHashPlugin },
        { plugin: RemoveJsHashPlugin },
    ],
};
