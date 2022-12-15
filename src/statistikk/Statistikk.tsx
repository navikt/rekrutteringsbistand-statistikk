import React, { FunctionComponent } from 'react';
import { Heading } from '@navikt/ds-react';
import {
    formaterDatoTilVisning,
    førsteDagIInneværendeMåned,
    sisteDagIInneværendeMåned,
} from '../datoUtils';
import Forespørsler from './Forespørsler';
import Utfallsstatistikk from './Utfallsstatistikk';
import css from './Statistikk.module.css';

type Props = {
    navKontor: string;
};

const Statistikk: FunctionComponent<Props> = ({ navKontor }) => {
    const fraOgMed = førsteDagIInneværendeMåned();
    const tilOgMed = sisteDagIInneværendeMåned();

    return (
        <div className={css.statistikk}>
            <Heading level="1" size="medium" className={css.tittel}>
                Ditt NAV-kontor
            </Heading>
            <p className={css.tidsperiode}>
                <>Statistikk for perioden </>
                <time dateTime={fraOgMed.toISOString()}>{formaterDatoTilVisning(fraOgMed)}</time>
                <span> til </span>
                <time dateTime={tilOgMed.toISOString()}>{formaterDatoTilVisning(tilOgMed)}</time>
            </p>
            <Utfallsstatistikk navKontor={navKontor} fraOgMed={fraOgMed} tilOgMed={tilOgMed} />
            <Forespørsler navKontor={navKontor} fraOgMed={fraOgMed} tilOgMed={tilOgMed} />
        </div>
    );
};

export default Statistikk;
