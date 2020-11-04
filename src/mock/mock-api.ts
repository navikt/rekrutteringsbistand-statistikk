import fetchMock from 'fetch-mock';
import { antallFormidlingerUrl } from '../api';
import { antallFormidlinger } from './testdata';

fetchMock.get(antallFormidlingerUrl, antallFormidlinger);
