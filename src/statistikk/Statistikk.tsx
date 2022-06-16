import React, { FunctionComponent } from 'react';
import { Heading } from '@navikt/ds-react';
import { idag, trettiDagerSiden, formaterDatoTilVisning } from '../datoUtils';
import Telling from './Telling';
import tellingCss from './Telling.module.css';
import Forespørsler from './Forespørsler';
import css from './Statistikk.module.css';
import useStatistikk from './useStatistikk';

type Props = {
    navKontor: string;
};

const Statistikk: FunctionComponent<Props> = ({ navKontor }) => {
    const fraOgMed = trettiDagerSiden();
    const tilOgMed = idag();

    const [antallPresentert, antallFåttJobben] = useStatistikk(navKontor, fraOgMed, tilOgMed);

    const beskrivelseForAntallFåttJobben = `${
        antallFåttJobben === 1 ? 'person' : 'personer'
    } har fått jobb`;
    const beskrivelseForAntallPresentert = `${
        antallPresentert === 1 ? 'person' : 'personer'
    } har blitt presentert for arbeidsgiver`;

    return (
        <div className={css.statistikk}>
            <Heading level="1" size="medium">
                Ditt NAV-kontor
            </Heading>
            <p className={css.tidsperiode}>
                <time dateTime={fraOgMed.toISOString()}>{formaterDatoTilVisning(fraOgMed)}</time> -{' '}
                <time dateTime={tilOgMed.toISOString()}>{formaterDatoTilVisning(tilOgMed)}</time>
            </p>
            <div className={css.tall}>
                <Telling
                    tall={antallFåttJobben}
                    beskrivelse={beskrivelseForAntallFåttJobben}
                    className={tellingCss.fattJobb}
                />
                <Telling
                    tall={antallPresentert}
                    beskrivelse={beskrivelseForAntallPresentert}
                    className={tellingCss.presentert}
                />
            </div>
            <Forespørsler navKontor={navKontor} fraOgMed={fraOgMed} tilOgMed={tilOgMed} />
        </div>
    );
};

export default Statistikk;
