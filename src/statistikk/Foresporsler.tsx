import { Heading, Panel } from '@navikt/ds-react';
import React, { FunctionComponent } from 'react';
import Svartelling, { SvartellingIkon } from './Svartelling';
import css from './Foresporsler.module.css';

type Props = {
    navKontor: string;
};

const Forespørsler: FunctionComponent<Props> = ({ navKontor }) => {
    const svarTotalt: number = 120;
    const svarteJa: number = 22;
    const svarteNei: number = 30;
    const svarteIkke: number = 40;

    const finnProsent = (tall: number) => {
        return Math.round((tall / svarTotalt) * 100) + '%';
    };

    return (
        <Panel border={true}>
            <Heading level="2" size="small">
                Stillinger delt med kandidater i Aktivitetsplanen
            </Heading>
            <div className={css.delingstatistikk}>
                <Svartelling
                    svartellingIkon={SvartellingIkon.Delt}
                    oppsummering={svarTotalt + ''}
                    detaljer="stillinger har blitt delt med kandidater i Aktivitetsplanen"
                    forklaring=""
                ></Svartelling>
                <Svartelling
                    svartellingIkon={SvartellingIkon.Ja}
                    oppsummering={finnProsent(svarteJa) + ' svarte ja'}
                    detaljer={`til at CV-en kan deles med arbeidsgiver
            `}
                    forklaring={`(${svarteJa} av ${svarTotalt})`}
                ></Svartelling>
                <Svartelling
                    svartellingIkon={SvartellingIkon.Nei}
                    oppsummering={finnProsent(svarteNei) + ' svarte nei'}
                    detaljer={`til at CV-en kan deles med arbeidsgiver`}
                    forklaring={`(${svarteNei} av ${svarTotalt})`}
                ></Svartelling>
                <Svartelling
                    svartellingIkon={SvartellingIkon.SvarteIkke}
                    oppsummering={finnProsent(svarteIkke) + ' svarte ikke'}
                    detaljer={`på om CV-en kan deles med arbeidsgiver`}
                    forklaring={`(${svarteIkke} av ${svarTotalt})`}
                ></Svartelling>
            </div>
        </Panel>
    );
};

export default Forespørsler;
