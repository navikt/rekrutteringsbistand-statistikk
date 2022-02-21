import path from 'path';
import express from 'express';
import { setupProxy } from './proxy';
import { initializeAzureAd } from './azureAd';
import { ensureLoggedIn, removeIssoIdToken, setOnBehalfOfToken } from './middlewares';
import cookieParser from 'cookie-parser';

const app = express();

const cluster = process.env.NAIS_CLUSTER_NAME;
const fssMiljø = cluster === 'prod-gcp' ? 'prod-fss' : 'dev-fss';

const port = process.env.PORT || 3000;
const statistikkApiUrl = process.env.STATISTIKK_API_URL;
const statistikkApiScope = `api://${fssMiljø}.arbeidsgiver.rekrutteringsbistand-statistikk-api/.default`;

const basePath = '/rekrutteringsbistand-statistikk';
const buildPath = path.join(__dirname, '../build');

const startServer = () => {
    app.use(cookieParser());

    app.get([`${basePath}/internal/isAlive`, `${basePath}/internal/isReady`], (_, res) =>
        res.sendStatus(200)
    );

    app.use(`${basePath}/static`, express.static(buildPath + '/static'));
    app.use(`${basePath}/asset-manifest.json`, express.static(`${buildPath}/asset-manifest.json`));

    app.use(
        `${basePath}/api`,
        removeIssoIdToken,
        ensureLoggedIn,
        setOnBehalfOfToken(statistikkApiScope),
        setupProxy(`${basePath}/api`, statistikkApiUrl)
    );

    app.listen(port, () => {
        console.log('Server kjører på port', port);
    });
};

initializeAzureAd();

startServer();
