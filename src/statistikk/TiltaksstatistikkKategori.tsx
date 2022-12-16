import React, { FunctionComponent } from 'react';
import css from './Tiltaksstatistikk.module.css';
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
        <p>
            <span className={css.kategoriprosent}>
                {formaterSomProsentAvTotalen(antallTiltak, antallTotal)}
            </span>
            <span className={css.kategoridetaljer}>
                <Label>{kategorinavn}</Label>
                <Detail className={css.kategorifordeling} as="span">
                    ({antallTiltak} av {antallTotal})
                </Detail>
            </span>
        </p>
    );
};

export default TiltaksstatistikkKategori;
