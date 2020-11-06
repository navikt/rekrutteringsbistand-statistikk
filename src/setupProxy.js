const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    const setupProxy = (path, target) => {
        app.use(
            path,
            createProxyMiddleware({
                target,
                changeOrigin: true,
                pathRewrite: {
                    '^/statistikk/api': '',
                },
            })
        );
    };

    setupProxy('/statistikk/api', 'http://localhost:8111/rekrutteringsbistand-statistikk-api');
};
