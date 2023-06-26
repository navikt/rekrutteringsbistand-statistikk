import { FunctionComponent } from 'react';
import Navspa from '@navikt/navspa';

import { createRoot } from 'react-dom/client';
import { Router } from 'react-router-dom';
import App, { AppProps } from './App';
import Utviklingsapp from './utviklingsapp/Utviklingsapp';
import './index.css';

const AppMedRouter: FunctionComponent<AppProps> = (props: AppProps) => (
    <Router navigator={props.history} location={props.history.location}>
        <App {...props} />
    </Router>
);

const renderUtviklingsapp = async () => {
    if (import.meta.env.VITE_MOCK === true) {
        await import('./mock/mock-api');
    }

    const container = document.getElementById('utviklingsapp');
    const root = createRoot(container!);
    root.render(<Utviklingsapp />);
};

const skalEksporteres = import.meta.env.VITE_EXPORT || import.meta.env.PROD;

if (skalEksporteres) {
    Navspa.eksporter('rekrutteringsbistand-statistikk', AppMedRouter);
} else {
    renderUtviklingsapp();
}
