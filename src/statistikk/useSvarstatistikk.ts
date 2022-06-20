import { useEffect, useState } from 'react';
import { formaterDatoTilApi } from '../datoUtils';

const apiBasePath = '/foresporsel-om-deling-av-cv-api';
export const forespørslerApiUrl = `${apiBasePath}/statistikk`;

export type Svarstatistikk = {
    antallSvartJa: number;
    antallSvartNei: number;
    antallVenterPåSvar: number;
    antallUtløpteSvar: number;
};

const useSvarstatistikk = (navKontor: string, fraOgMed: Date, tilOgMed: Date) => {
    const [svarstatistikk, setSvarstatistikk] = useState<Svarstatistikk | undefined>(undefined);

    useEffect(() => {
        const url =
            `${forespørslerApiUrl}?` +
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
                const svarstatistikk: Svarstatistikk = await respons.json();
                setSvarstatistikk(svarstatistikk);
            }
        };
        hentData();
    }, [navKontor, fraOgMed, tilOgMed]);

    return svarstatistikk;
};

export default useSvarstatistikk;
