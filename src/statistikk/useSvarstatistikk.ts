import { useEffect, useState } from 'react';
import { formaterDatoTilApi } from '../datoUtils';
import { Nettressurs } from './Nettressurs';

const apiBasePath = '/foresporsel-om-deling-av-cv-api';
export const forespørslerApiUrl = `${apiBasePath}/statistikk`;

export type Svarstatistikk = {
    antallSvartJa: number;
    antallSvartNei: number;
    antallVenterPåSvar: number;
    antallUtløpteSvar: number;
};

const useSvarstatistikk = (navKontor: string, fraOgMed: Date, tilOgMed: Date) => {
    const [svarstatistikk, setSvarstatistikk] = useState<Nettressurs<Svarstatistikk>>({
        kind: 'ikke-lastet',
    });

    useEffect(() => {
        const url =
            `${forespørslerApiUrl}?` +
            new URLSearchParams({
                fraOgMed: formaterDatoTilApi(fraOgMed),
                tilOgMed: formaterDatoTilApi(tilOgMed),
                navKontor,
            });
        const hentData = async () => {
            setSvarstatistikk({
                kind: 'laster-inn',
            });

            const respons = await fetch(url, {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'same-origin',
            });

            if (respons.ok) {
                setSvarstatistikk({
                    kind: 'suksess',
                    data: await respons.json(),
                });
            } else if (respons.status === 401) {
                videresendTilInnlogging();

                setSvarstatistikk({
                    kind: 'feil',
                    error: 'Er ikke logget inn',
                });
            } else {
                setSvarstatistikk({
                    kind: 'feil',
                    error: 'Kunne ikke laste inn statistikk',
                });
            }
        };
        hentData();
    }, [navKontor, fraOgMed, tilOgMed]);

    return svarstatistikk;
};

const videresendTilInnlogging = () => {
    window.location.href = `/oauth2/login?redirect=${window.location.pathname}`;
};

export default useSvarstatistikk;
