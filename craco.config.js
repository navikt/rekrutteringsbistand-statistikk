const CracoLessPlugin = require('craco-less');
const cssprefixer = require('postcss-prefix-selector');

module.exports = {
    style: {
        postcss: {
            plugins: [
                cssprefixer({
                    prefix: '.rekbis-statistikk',
                    exclude: ['html', 'body', '.rekbis-statistikk'],
                    transform: function (prefix, selector, prefixedSelector) {
                        if (selector.startsWith('body ')) {
                            return `body ${prefix} ${selector.slice(5)}`;
                        } else if (selector.startsWith('html ')) {
                            return `html ${prefix} ${selector.slice(5)}`;
                        } else if (selector.startsWith('.rekbis-statistikk ')) {
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
    plugins: [{ plugin: CracoLessPlugin }],
};
