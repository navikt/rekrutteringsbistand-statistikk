import { useEffect, useState } from 'react';
import { formaterDatoTilApi } from '../datoUtils';

const apiBasePath = '/foresporsel-om-deling-av-cv-api';
export const forespørslerApiUrl = `${apiBasePath}/statistikk`;

type AntallForespørslerInboundDto = {
    antallSvartJa: number;
    antallSvartNei: number;
    antallUbesvart: number;
};

const useForespørsler = (navKontor: string, fraOgMed: Date, tilOgMed: Date) => {
    const [antallSvartJa, setAntallSvartJa] = useState<number>(0);
    const [antallSvartNei, setAntallSvartNei] = useState<number>(0);
    const [antallUbesvart, setAntallUbesvart] = useState<number>(0);

    useEffect(() => {
        const hentData = async () => {
            const respons = await fetch(forespørslerApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                credentials: 'same-origin',
                body: JSON.stringify({
                    fraOgMed: formaterDatoTilApi(fraOgMed),
                    tilOgMed: formaterDatoTilApi(tilOgMed),
                    navKontor: navKontor,
                }),
            });

            if (respons.ok) {
                const forespørsler: AntallForespørslerInboundDto = await respons.json();

                setAntallSvartJa(forespørsler.antallSvartJa);
                setAntallSvartNei(forespørsler.antallSvartNei);
                setAntallUbesvart(forespørsler.antallUbesvart);
            }
        };
        hentData();
    }, [navKontor, fraOgMed, tilOgMed]);

    return {
        antallSvartJa,
        antallSvartNei,
        antallUbesvart,
    };
};

export default useForespørsler;
