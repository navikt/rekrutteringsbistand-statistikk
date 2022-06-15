export const hentAntallFormidlinger = (navKontor: string) => {
    return navKontor === '0239'
        ? {
              antallFåttJobben: 26,
              antallPresentert: 108,
          }
        : {
              antallFåttJobben: 13,
              antallPresentert: 78,
          };
};

export const hentForespørslerstatistikk = (navKontor: string) => {
    return navKontor === '0239'
        ? {
              antallSvartJa: 26,
              antallSvartNei: 108,
              antallUbesvart: 22,
          }
        : {
              antallSvartJa: 13,
              antallSvartNei: 78,
              antallUbesvart: 100,
          };
};
