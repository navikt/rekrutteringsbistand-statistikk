export const trettiDagerSiden = (): string => {
    const dato = new Date();
    dato.setDate(dato.getDate() - 30);
    return dato.toLocaleDateString('en-EN', options);
};

export const idag = (): string => {
    return new Date().toLocaleDateString('en-US', options); // TODO formatere dato til YYYY-MM-DD
};

const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
