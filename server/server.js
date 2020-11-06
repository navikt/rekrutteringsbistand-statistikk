const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const port = process.env.PORT || 3000;
const basePath = '/statistikk';
const buildPath = path.join(__dirname, '../build');

const startServer = () => {
    app.use(`${basePath}/static`, express.static(buildPath + '/static'));
    app.use(`${basePath}/asset-manifest.json`, express.static(`${buildPath}/asset-manifest.json`));

    app.get(`${basePath}/internal/isAlive`, (req, res) => res.sendStatus(200));
    app.get(`${basePath}/internal/isReady`, (req, res) => res.sendStatus(200));

    app.use(`${basePath}/api`, createProxyMiddleware({ target: '', changeOrigin: true }));

    app.listen(port, () => {
        console.log('Server kjører på port', port);
    });
};

startServer();
