import fetchMock from 'fetch-mock';
import { statistikkApiUrl } from '../statistikk/Statistikk';
import { hentAntallFormidlinger } from './testdata';

fetchMock.config.fallbackToNetwork = true;

fetchMock.get(`begin:${statistikkApiUrl}`, (url) => {
    const searchQuery = url.split('?').pop();
    const navKontor = new URLSearchParams(searchQuery).get('navKontor');

    return hentAntallFormidlinger(navKontor || '0000');
});
