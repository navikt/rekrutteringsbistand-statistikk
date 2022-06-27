export const trettiDagerSiden = (): Date => {
    const dato = new Date();

    const minusTrettiDager = dato.getDate() - 30;
    dato.setDate(minusTrettiDager);

    return dato;
};

export const idag = (): Date => new Date();

export const førsteDagIInneværendeMåned = (): Date => {
    const dato = new Date();
    dato.setDate(1);

    return dato;
};

export const sisteDagIInneværendeMåned = (): Date => {
    const dato = new Date();
    dato.setMonth(dato.getMonth() + 1);
    dato.setDate(0);

    return dato;
};

export const formaterDatoTilApi = (dato: Date): string => {
    const dag = medNull(dato.getDate());
    const måned = medNull(dato.getMonth() + 1);
    const år = dato.getFullYear();

    return `${år}-${måned}-${dag}`;
};

export const formaterDatoTilVisning = (dato: Date): string => {
    return dato.toLocaleString('nb-NO', {
        day: 'numeric',
        month: 'long',
    });
};

const medNull = (n: number) => (n < 10 ? '0' + n : n);
