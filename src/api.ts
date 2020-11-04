import useSWR from 'swr';

export const useAntallFormidlinger = (
    fraOgMed: Date,
    tilOgMed: Date,
    navKontor: string
): Response<AntallFormidlingerInboundDto> => {
    const { data, error } = useSWR(
        [antallFormidlingerUrl, fraOgMed, tilOgMed, navKontor],
        (url, fraOgMed, tilOgMed, navKontor) => fetcher(url, { fraOgMed, tilOgMed, navKontor })
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

const fetcher = (...args: [url: string, body: any]) => {
    const [url, body] = args;
    return fetch(url, {
        headers: { 'Content-Type': 'application/json', body: JSON.stringify(body) },
    }).then((res) => res.json());
};
