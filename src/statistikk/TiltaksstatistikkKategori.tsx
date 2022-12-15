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
        <div>
            <p className={css.kategoriprosent}>
                {formaterSomProsentAvTotalen(antallTiltak, antallTotal)}
            </p>
            <p className={css.kategoridetaljer}>
                <Label>{kategorinavn}</Label>
                <Detail>
                    ({antallTiltak} av {antallTotal})
                </Detail>
            </p>
        </div>
    );
};

export default TiltaksstatistikkKategori;
