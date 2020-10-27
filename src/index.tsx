import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Utviklingsapp from './utviklingsapp/Utviklingsapp';
import './index.css';

const erProd = process.env.NODE_ENV === 'production';
const eksporterApp = process.env.REACT_APP_EXPORT || erProd;

if (eksporterApp) {
    (window as any)['rekrutteringsbistand-statistikk'] = {};

    (window as any)['rekrutteringsbistand-statistikk'].render = (
        element: HTMLElement,
        props: Object
    ) => {
        ReactDOM.render(React.createElement(App, props), element);
    };

    (window as any)['rekrutteringsbistand-statistikk'].unmount = (element: HTMLElement) => {
        ReactDOM.unmountComponentAtNode(element);
    };
} else {
    ReactDOM.render(<Utviklingsapp />, document.getElementById('utviklingsapp'));
}
