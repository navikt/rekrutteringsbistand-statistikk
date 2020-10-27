import React from 'react';
import ReactDOM from 'react-dom';

const renderApp = (component: React.ComponentType) => (element: HTMLElement, props: Object) => {
    ReactDOM.render(React.createElement(component, props), element);
};

const unmountApp = (element: HTMLElement) => {
    ReactDOM.unmountComponentAtNode(element);
};

const eksporterApp = (navn: string, component: React.ComponentType) => {
    (window as any)[navn] = {};
    (window as any)[navn].render = renderApp(component);
    (window as any)[navn].unmount = unmountApp;
};

export default eksporterApp;