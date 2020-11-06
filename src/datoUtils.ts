export const trettiDagerSiden = (): string => {
    const dato = new Date();

    const minusTrettiDager = dato.getDate() - 30;
    dato.setDate(minusTrettiDager);

    return formaterDato(dato);
};

export const idag = (): string => formaterDato(new Date());

const formaterDato = (dato: Date): string => {
    const dag = dato.getDate();
    const måned = dato.getMonth() + 1;
    const år = dato.getFullYear();

    return `${år}-${måned}-${dag}`;
};
