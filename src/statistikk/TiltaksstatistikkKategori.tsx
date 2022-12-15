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
    return (
        <div>
            <p className={css.prosent}>{formaterSomProsentAvTotalen(antallTiltak, antallTotal)}</p>
            <p>
                <Label>{kategorinavn}</Label>
                <Detail>
                    ({antallTiltak} av {antallTotal})
                </Detail>
            </p>
        </div>
    );
};

export default TiltaksstatistikkKategori;
