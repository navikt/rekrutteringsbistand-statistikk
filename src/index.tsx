import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Utviklingsapp from './utviklingsapp/Utviklingsapp';
import eksporterApp from './eksporterApp';
import './index.less';

const skalEksporteres = process.env.REACT_APP_EXPORT || process.env.NODE_ENV === 'production';

if (skalEksporteres) {
    eksporterApp('rekrutteringsbistand-statistikk', App);
} else {
    ReactDOM.render(<Utviklingsapp />, document.getElementById('utviklingsapp'));
}
