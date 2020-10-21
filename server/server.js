const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;
const BASE_PATH = '/rekrutteringsbistand-statistikk';
const WEB_PATH = '/statistikk';

const buildPath = path.join(__dirname, '../build');

const startServer = () => {
    app.use(`${WEB_PATH}/static`, express.static(buildPath));

    app.use(`${WEB_PATH}/asset-manifest.json`, express.static(`${buildPath}/asset-manifest.json`));

    app.get(`${BASE_PATH}/internal/isAlive`, (req, res) => res.sendStatus(200));
    app.get(`${BASE_PATH}/internal/isReady`, (req, res) => res.sendStatus(200));

    app.listen(PORT, () => {
        console.log('Server kjører på port', PORT);
    });
};

startServer();
