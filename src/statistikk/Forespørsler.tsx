import { Heading, Panel } from '@navikt/ds-react';
import React, { FunctionComponent } from 'react';
import Svartelling, { SvartellingIkon } from './Svartelling';
import useSvarstatistikk from './useSvarstatistikk';
import css from './Forespørsler.module.css';

type Props = {
    navKontor: string;
    fraOgMed: Date;
    tilOgMed: Date;
};

const Forespørsler: FunctionComponent<Props> = ({ navKontor, fraOgMed, tilOgMed }) => {
    const svarstatistikk = useSvarstatistikk(navKontor, fraOgMed, tilOgMed);

    if (svarstatistikk === undefined) {
        return null;
    }

    const { antallSvartJa, antallSvartNei, antallUtløpteSvar, antallVenterPåSvar } = svarstatistikk;

    const antallTotalt = antallSvartJa + antallSvartNei + antallVenterPåSvar + antallUtløpteSvar;

    const finnProsent = (tall: number) => {
        return Math.round((tall / antallTotalt) * 100) + '%';
    };

    return (
        <Panel className={css.forespørsler}>
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
                    oppsummering={finnProsent(antallUtløpteSvar) + ' svarte ikke'}
                    detaljer="på om CV-en kan deles med arbeidsgiver"
                    forklaring={`(${antallUtløpteSvar} av ${antallTotalt})`}
                />
            </div>
        </Panel>
    );
};

export default Forespørsler;
