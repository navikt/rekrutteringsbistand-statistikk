const CracoLessPlugin = require('craco-less');
const cssprefixer = require('postcss-prefix-selector');

const transformerCss = (prefix, selector, prefixedSelector) => {
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
};

module.exports = {
    style: {
        postcss: {
            plugins: [
                cssprefixer({
                    prefix: '.statistikk',
                    exclude: ['html', 'body', '.statistikk'],
                    transform: transformerCss,
                }),
            ],
        },
    },
    plugins: [{ plugin: CracoLessPlugin }],
};
