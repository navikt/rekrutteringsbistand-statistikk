export const trettiDagerSiden = (): string => {
    const dato = new Date();

    const minusTrettiDager = dato.getDate() - 30;
    dato.setDate(minusTrettiDager);

    return formaterDato(dato);
};

export const idag = (): string => formaterDato(new Date());

const formaterDato = (dato: Date): string => {
    const dag = medNull(dato.getDate());
    const måned = medNull(dato.getMonth() + 1);
    const år = dato.getFullYear();

    return `${år}-${måned}-${dag}`;
};

const medNull = (n: number) => (n < 10 ? '0' + n : n);
