import React, { FunctionComponent } from 'react';
import css from './Tiltaksstatistikk.module.css';
import classNames from 'classnames';
import { Label, Detail } from '@navikt/ds-react';
import { formaterSomProsentAvTotalen } from './Forespørsler';

type Props = {
    kategorinavn: string;
    antallTiltak: number;
    antallTotal: number;
};

const TiltaksstatistikkKategori: FunctionComponent<Props> = ({
    kategorinavn,
    antallTiltak,
    antallTotal,
}) => {
    const klassenavn = classNames(css.telling);

    return (
        <div>
            <p className={css.prosent}>{formaterSomProsentAvTotalen(antallTiltak, antallTotal)}</p>
            <p>
                <Label>{kategorinavn}</Label>
                <Detail>
                    ({antallTiltak} av {antallTotal})
                </Detail>
            </p>
            <p>
                <Detail>Viken: 50% (25 av 50)</Detail>
                <Detail>Hele Landet: 40% (120 av 329)</Detail>
            </p>
        </div>
    );
};

export default TiltaksstatistikkKategori;
