import { Heading, Panel } from '@navikt/ds-react';
import React, { FunctionComponent } from 'react';
import Svartelling, { SvartellingIkon } from './Svartelling';
import css from './Forespørsler.module.css';
import useForespørsler from './useForespørsler';

type Props = {
    navKontor: string;
    fraOgMed: Date;
    tilOgMed: Date;
};

const Forespørsler: FunctionComponent<Props> = ({ navKontor, fraOgMed, tilOgMed }) => {
    const { antallUbesvart, antallSvartJa, antallSvartNei } = useForespørsler(
        navKontor,
        fraOgMed,
        tilOgMed
    );

    const finnProsent = (tall: number) => {
        return Math.round((tall / antallTotalt) * 100) + '%';
    };

    const antallTotalt = antallSvartJa + antallSvartNei + antallUbesvart;

    return (
        <Panel className={css.forespørsler} border={true}>
            <Heading level="2" size="small">
                Stillinger delt med kandidater i Aktivitetsplanen
            </Heading>
            <div className={css.delingstatistikk}>
                <Svartelling
                    svartellingIkon={SvartellingIkon.Delt}
                    oppsummering={antallTotalt + ''}
                    detaljer="stillinger har blitt delt med kandidater i Aktivitetsplanen"
                    forklaring=""
                />
                <Svartelling
                    svartellingIkon={SvartellingIkon.Ja}
                    oppsummering={finnProsent(antallSvartJa) + ' svarte ja'}
                    detaljer="til at CV-en kan deles med arbeidsgiver"
                    forklaring={`(${antallSvartJa} av ${antallTotalt})`}
                />
                <Svartelling
                    svartellingIkon={SvartellingIkon.Nei}
                    oppsummering={finnProsent(antallSvartNei) + ' svarte nei'}
                    detaljer="til at CV-en kan deles med arbeidsgiver"
                    forklaring={`(${antallSvartNei} av ${antallTotalt})`}
                />
                <Svartelling
                    svartellingIkon={SvartellingIkon.SvarteIkke}
                    oppsummering={finnProsent(antallUbesvart) + ' svarte ikke'}
                    detaljer="på om CV-en kan deles med arbeidsgiver"
                    forklaring={`(${antallUbesvart} av ${antallTotalt})`}
                />
            </div>
        </Panel>
    );
};

export default Forespørsler;
