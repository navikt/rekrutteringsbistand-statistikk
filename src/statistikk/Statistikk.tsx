import React, { FunctionComponent } from 'react';
import { Heading } from '@navikt/ds-react';
import {
    idag,
    trettiDagerSiden,
    formaterDatoTilVisning,
    førsteDagIInneværendeMåned,
    sisteDagIInneværendeMåned,
} from '../datoUtils';
import Forespørsler from './Forespørsler';
import Utfallsstatistikk from './Utfallsstatistikk';
import css from './Statistikk.module.css';
import { erIkkeProd } from '../featureToggle';

type Props = {
    navKontor: string;
};

const Statistikk: FunctionComponent<Props> = ({ navKontor }) => {
    const fraOgMed = erIkkeProd ? førsteDagIInneværendeMåned() : trettiDagerSiden();
    const tilOgMed = erIkkeProd ? sisteDagIInneværendeMåned() : idag();

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
            {erIkkeProd && (
                <Forespørsler navKontor={navKontor} fraOgMed={fraOgMed} tilOgMed={tilOgMed} />
            )}
        </div>
    );
};

export default Statistikk;
