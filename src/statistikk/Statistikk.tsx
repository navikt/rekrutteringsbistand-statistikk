import React, { FunctionComponent } from 'react';
import { Heading } from '@navikt/ds-react';
import { idag, trettiDagerSiden, formaterDatoTilVisning } from '../datoUtils';
import Forespørsler from './Forespørsler';
import Utfallsstatistikk from './Utfallsstatistikk';
import css from './Statistikk.module.css';
import { erIkkeProd } from '../featureToggle';

type Props = {
    navKontor: string;
};

const Statistikk: FunctionComponent<Props> = ({ navKontor }) => {
    const fraOgMed = trettiDagerSiden();
    const tilOgMed = idag();

    return (
        <div className={css.statistikk}>
            <Heading level="1" size="medium">
                Ditt NAV-kontor
            </Heading>
            <p className={css.tidsperiode}>
                <time dateTime={fraOgMed.toISOString()}>{formaterDatoTilVisning(fraOgMed)}</time> -{' '}
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
