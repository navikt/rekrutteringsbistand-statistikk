import fetchMock from 'fetch-mock';
import { statistikkApiUrl } from '../statistikk/Statistikk';
import { antallFormidlinger } from './testdata';

fetchMock.config.fallbackToNetwork = true;

fetchMock.get(`begin:${statistikkApiUrl}`, antallFormidlinger);
