import React, { FunctionComponent, useEffect, useState } from 'react';
import { antallFormidlingerUrl, useAntallFormidlinger } from './api';

type Props = {
    navKontor: string;
};

type AntallFormidlingerInboundDto = {
    antallPresentert: number;
    antallFåttJobben: number;
};

const Statistikk: FunctionComponent<Props> = ({ navKontor }) => {
    const fraOgMed = new Date();
    const tilOgMed = new Date();

    const [antallPresentert, setAntallPresentert] = useState<number>(0);
    const [antallFåttJobben, setAntallFåttJobben] = useState<number>(0);

    useEffect(() => {
        const url =
            antallFormidlingerUrl +
            '?' +
            new URLSearchParams({
                fraOgMed: fraOgMed.toDateString(),
                tilOgMed: tilOgMed.toDateString(),
                navKontor: navKontor,
            });

        const hentData = async () => {
            const respons = await fetch(url, {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'same-origin',
            });
            if (respons.ok) {
                setAntallFåttJobben(respons.)
            }
        };
        hentData();
    }, [fraOgMed, tilOgMed, navKontor]);

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
