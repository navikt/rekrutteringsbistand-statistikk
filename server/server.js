const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const port = process.env.PORT || 3000;
const statistikkApiUrl = process.env.STATISTIKK_API_URL;

const basePath = '/statistikk';
const buildPath = path.join(__dirname, '../build');

const proxyTilStatistikkApi = (url) =>
    createProxyMiddleware(url, {
        target: statistikkApiUrl,
        changeOrigin: true,
        pathRewrite: (path) => path.replace(url, ''),
    });

const startServer = () => {
    app.use(`${basePath}/static`, express.static(buildPath + '/static'));
    app.use(`${basePath}/asset-manifest.json`, express.static(`${buildPath}/asset-manifest.json`));

    app.use(proxyTilStatistikkApi(`${basePath}/api`));

    app.get(`${basePath}/internal/isAlive`, (req, res) => res.sendStatus(200));
    app.get(`${basePath}/internal/isReady`, (req, res) => res.sendStatus(200));

    app.listen(port, () => {
        console.log('Server kjører på port', port);
    });
};

startServer();
