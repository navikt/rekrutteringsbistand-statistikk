import React, { FunctionComponent } from 'react';
import css from './Telling.module.css';
import classNames from 'classnames';

type Props = {
    kategorinavn: string;
};

const TiltaksstatistikkKategori: FunctionComponent<Props> = ({ kategorinavn }) => {
    const klassenavn = classNames(css.telling);

    return <p>Kategori {kategorinavn}</p>;
};

export default TiltaksstatistikkKategori;
