import React, { FunctionComponent, useEffect, useState } from 'react';
import { idag, trettiDagerSiden } from './datoUtils';

type Props = {
    navKontor: string;
};

type AntallFormidlingerInboundDto = {
    antallPresentert: number;
    antallFåttJobben: number;
};

const Statistikk: FunctionComponent<Props> = ({ navKontor }) => {
    const [antallPresentert, setAntallPresentert] = useState<number>(0);
    const [antallFåttJobben, setAntallFåttJobben] = useState<number>(0);

    useEffect(() => {
        const url =
            '/rekrutteringsbistand-statistikk-api/statistikk?' +
            new URLSearchParams({
                fraOgMed: trettiDagerSiden(),
                tilOgMed: idag(),
                navKontor,
            });

        const hentData = async () => {
            const respons = await fetch(url, {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'same-origin',
            });
            if (respons.ok) {
                const formidlinger: AntallFormidlingerInboundDto = await respons.json();
                setAntallPresentert(formidlinger.antallPresentert);
                setAntallFåttJobben(formidlinger.antallFåttJobben);
            }
        };
        hentData();
    }, [navKontor]);

    return (
        <div>
            Fått jobben: {antallFåttJobben}
            Presenterte: {antallPresentert}
        </div>
    );
};

export default Statistikk;
