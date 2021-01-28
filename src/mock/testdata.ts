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
