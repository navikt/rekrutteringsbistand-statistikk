import useSWR from 'swr';

export const useAntallFormidlinger = (
    fraOgMed: Date,
    tilOgMed: Date,
    navKontor: string
): Response<AntallFormidlingerInboundDto> => {
    const { data, error } = useSWR(antallFormidlingerUrl, fetcher);
    return {
        data: data,
        isLoading: !error && !data,
        isError: error || !data,
    };
};

export const antallFormidlingerUrl = '/rekrutteringsbistand-statistikk-api/statistikk';

// TODO Fikse disse typene
type Response<T> = {
    data?: T;
    isLoading: boolean;
    isError: boolean;
};

type AntallFormidlingerInboundDto = {
    antallPresentert: number;
    antallFåttJobben: number;
};

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());
