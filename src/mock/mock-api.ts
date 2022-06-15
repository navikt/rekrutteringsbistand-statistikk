import fetchMock from 'fetch-mock';
import { foresporslerApiUrl } from '../statistikk/Foresporsler';
import { statistikkApiUrl } from '../statistikk/Statistikk';
import { hentAntallFormidlinger, hentForespørslerstatistikk } from './testdata';

fetchMock.config.fallbackToNetwork = true;

fetchMock.get(`begin:${statistikkApiUrl}`, (url) => {
    const searchQuery = url.split('?').pop();
    const navKontor = new URLSearchParams(searchQuery).get('navKontor');

    return hentAntallFormidlinger(navKontor || '0000');
});

fetchMock.get(`begin:${foresporslerApiUrl}`, (url) => {
    const searchQuery = url.split('?').pop();
    const navKontor = new URLSearchParams(searchQuery).get('navKontor');

    return hentForespørslerstatistikk(navKontor || '0000');
});
