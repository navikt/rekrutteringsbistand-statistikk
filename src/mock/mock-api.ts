import fetchMock from 'fetch-mock';
import { forespørslerApiUrl, Svarstatistikk } from '../statistikk/useSvarstatistikk';
import { statistikkApiUrl } from '../statistikk/useUtfallsstatistikk';
import { hentAntallFormidlinger, hentForespørslerstatistikk } from './testdata';

fetchMock.config.fallbackToNetwork = true;

fetchMock.get(`begin:${statistikkApiUrl}`, (url) => {
    const searchQuery = url.split('?').pop();
    const navKontor = new URLSearchParams(searchQuery).get('navKontor');

    return hentAntallFormidlinger(navKontor || '0000');
});

fetchMock.get(`begin:${forespørslerApiUrl}`, (url): Svarstatistikk => {
    const searchQuery = url.split('?').pop();
    const navKontor = new URLSearchParams(searchQuery).get('navKontor');

    return hentForespørslerstatistikk(navKontor || '0000');
});
