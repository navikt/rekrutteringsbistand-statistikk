import useSWR from 'swr';

export const useAntallFormidlinger = (
    fraOgMed: Date,
    tilOgMed: Date,
    navKontor: string
): Response<AntallFormidlingerInboundDto> => {
    const { data, error } = useSWR(
        [antallFormidlingerUrl, fraOgMed, tilOgMed, navKontor],
        (antallFormidlingerUrl, fraOgMed, tilOgMed, navKontor) =>
            fetcher(antallFormidlingerUrl, { fraOgMed, tilOgMed, navKontor })
    );
    return {
        data: data,
        isLoading: !error && !data,
        error: error,
    };
};

export const antallFormidlingerUrl = '/rekrutteringsbistand-statistikk-api/statistikk';

// TODO Fikse disse typene
type Response<T> = {
    data?: T;
    isLoading: boolean;
    error: any;
};

// type Response<T> = Suksess<T> | Feil;
//
// type Suksess<T> = {
//     data: T;
// };
//
// type Feil = {
//     error: ApiError;
// };
//
// type ApiError = {
//     message: string;
//     status: number;
// };

type AntallFormidlingerInboundDto = {
    antallPresentert: number;
    antallFåttJobben: number;
};

// TODO sende med cookie
const fetcher = (...args: [url: string, body: any]) => {
    const [url, body] = args;
    return fetch(url, {
        body: JSON.stringify(body),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());
};

export const hentAntallFormidlinger = async (fraOgMed: Date, tilOgMed: Date, navKontor: string) => {
    try {
        const respons = await fetch(antallFormidlingerUrl + fnr, {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'same-origin',
        });
        if (!respons.ok) {
            return { status: Status.Feil, statusKode: respons.status };
        }

        const kandidat = await respons.json();
        return { status: Status.Suksess, data: kandidat };
    } catch (error) {
        return ukjentFeil;
    }
};
