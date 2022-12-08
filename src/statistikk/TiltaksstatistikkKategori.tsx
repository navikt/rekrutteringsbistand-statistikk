import React, { FunctionComponent } from 'react';
import css from './Tiltaksstatistikk.module.css';
import classNames from 'classnames';
import { Label, Detail } from '@navikt/ds-react';

type Props = {
    kategorinavn: string;
};

const TiltaksstatistikkKategori: FunctionComponent<Props> = ({ kategorinavn }) => {
    const klassenavn = classNames(css.telling);

    return (
        <div>
            <p className={css.prosent}>30%</p>
            <p>
                <Label>{kategorinavn}</Label>
                <Detail>(15 av 50)</Detail>
            </p>
            <p>
                <Detail>Viken: 50% (25 av 50)</Detail>
                <Detail>Hele Landet: 40% (120 av 329)</Detail>
            </p>
        </div>
    );
};

export default TiltaksstatistikkKategori;
