import React, { FunctionComponent } from 'react';
import { useAntallFormidlinger } from './api';
import { AppProps } from './App';

const Statistikk: FunctionComponent<AppProps> = ({ navKontor }) => {
    const fraOgMed = new Date();
    const tilOgMed = new Date();

    // TODO: navKontor kan være null
    const { data, isError, isLoading } = useAntallFormidlinger(fraOgMed, tilOgMed, navKontor!);

    // TODO: Fiks disse
    if (!navKontor) return <div>NavKontor må være satt</div>;
    if (isError || !data) return <div>Feil</div>;
    if (isLoading) return <div>Laster</div>;

    return (
        <div>
            Fått jobben: {data.antallFåttJobben}
            Presenterte: {data.antallPresentert}
        </div>
    );
};

export default Statistikk;
