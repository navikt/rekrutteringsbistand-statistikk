import { useState, useEffect } from 'react';
import { formaterDatoTilApi } from '../datoUtils';

const apiBasePath = '/statistikk-api';

export const statistikkApiUrl = `${apiBasePath}/statistikk`;

type AntallFormidlingerInboundDto = {
    antallPresentert: number;
    antallFåttJobben: number;
    tiltakstatistikk: TiltakStatistikkInboundDto;
};

type TiltakStatistikkInboundDto = {
    antallFåttJobben: number;
    antallFåttJobbenArbeidstrening: number;
    antallFåttJobbenLønnstilskudd: number;
    antallFåttJobbenMentorordning: number;
    antallFåttJobbenAndreTiltak: number;
};

const useUtfallsstatistikk = (navKontor: string, fraOgMed: Date, tilOgMed: Date) => {
    const [antallPresentert, setAntallPresentert] = useState<number>(0);
    const [antallFåttJobben, setAntallFåttJobben] = useState<number>(0);
    const [tiltakstatistikk, setTiltakstatistikk] = useState<TiltakStatistikkInboundDto | null>(
        null
    );

    useEffect(() => {
        const url =
            `${statistikkApiUrl}?` +
            new URLSearchParams({
                fraOgMed: formaterDatoTilApi(fraOgMed),
                tilOgMed: formaterDatoTilApi(tilOgMed),
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
                setTiltakstatistikk({
                    antallFåttJobben: formidlinger.tiltakstatistikk.antallFåttJobben,
                    antallFåttJobbenArbeidstrening:
                        formidlinger.tiltakstatistikk.antallFåttJobbenArbeidstrening,
                    antallFåttJobbenLønnstilskudd:
                        formidlinger.tiltakstatistikk.antallFåttJobbenLønnstilskudd,
                    antallFåttJobbenMentorordning:
                        formidlinger.tiltakstatistikk.antallFåttJobbenMentorordning,
                    antallFåttJobbenAndreTiltak:
                        formidlinger.tiltakstatistikk.antallFåttJobbenAndreTiltak,
                });
            }
        };
        hentData();
    }, [navKontor, fraOgMed, tilOgMed]);

    return { antallPresentert, antallFåttJobben };
};

export default useUtfallsstatistikk;
