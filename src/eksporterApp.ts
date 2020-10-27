import { AppProps } from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const defaultProps = {
    hilsen: '',
};

const renderApp = (component: React.FunctionComponent<AppProps>) => (
    element: HTMLElement,
    props: AppProps = defaultProps
) => {
    ReactDOM.render(React.createElement(component, props), element);
};

const unmountApp = (element: HTMLElement) => {
    ReactDOM.unmountComponentAtNode(element);
};

const eksporterApp = (navn: string, component: any) => {
    (window as any)[navn] = {};
    (window as any)[navn].render = renderApp(component);
    (window as any)[navn].unmount = unmountApp;
};

export default eksporterApp;
