import React, { FunctionComponent } from 'react';
import { useAntallFormidlinger } from './api';

type Props = {
    navKontor: string;
};

const Statistikk: FunctionComponent<Props> = ({ navKontor }) => {
    const fraOgMed = new Date();
    const tilOgMed = new Date();

    // TODO: navKontor kan være null
    const { data, error, isLoading } = useAntallFormidlinger(fraOgMed, tilOgMed, navKontor);

    // TODO: Fiks disse
    if (isLoading) return <div>Laster</div>;
    if (error) return <div>Feil</div>;
    if (!data) return <div>ingen data</div>;

    return (
        <div>
            Fått jobben: {data.antallFåttJobben}
            Presenterte: {data.antallPresentert}
        </div>
    );
};

export default Statistikk;
