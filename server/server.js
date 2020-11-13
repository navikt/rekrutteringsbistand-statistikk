const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const port = process.env.PORT || 3000;
const statistikkApiUrl = process.env.STATISTIKK_API_URL;

const basePath = '/rekrutteringsbistand-statistikk';
const buildPath = path.join(__dirname, '../build');

// Krever ekstra miljøvariabler, se nais.yaml
const setupProxy = (fraPath, tilTarget) =>
    createProxyMiddleware(fraPath, {
        target: tilTarget,
        changeOrigin: true,
        secure: true,
        pathRewrite: (path) => path.replace(fraPath, ''),
    });

const startServer = () => {
    app.use(`${basePath}/static`, express.static(buildPath + '/static'));
    app.use(`${basePath}/asset-manifest.json`, express.static(`${buildPath}/asset-manifest.json`));

    app.use(setupProxy(`${basePath}/api`, statistikkApiUrl));

    app.get(`${basePath}/internal/isAlive`, (req, res) => res.sendStatus(200));
    app.get(`${basePath}/internal/isReady`, (req, res) => res.sendStatus(200));

    app.listen(port, () => {
        console.log('Server kjører på port', port);
    });
};

startServer();
