import fetchMock from 'fetch-mock';
import { antallFormidlinger } from './testdata';

fetchMock.get('/rekrutteringsbistand-statistikk-api/statistikk', antallFormidlinger);
