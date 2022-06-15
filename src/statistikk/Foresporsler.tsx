import { Heading, Panel } from '@navikt/ds-react';
import React, { FunctionComponent, useEffect, useState } from 'react';
import Svartelling, { SvartellingIkon } from './Svartelling';
import css from './Foresporsler.module.css';
import { formaterDatoTilApi } from '../datoUtils';

type Props = {
    navKontor: string;
    fraOgMed: Date;
    tilOgMed: Date;
};

type AntallForesporslerInboundDto = {
    antallSvartJa: number;
    antallSvartNei: number;
    antallUbesvart: number;
};

const apiBasePath = '/foresporsel-om-deling-av-cv-api';
export const foresporslerApiUrl = `${apiBasePath}/statistikk`;

const Forespørsler: FunctionComponent<Props> = ({ navKontor, fraOgMed, tilOgMed }) => {
    const [antallSvartJa, setAntallSvartJa] = useState<number>(0);
    const [antallSvartNei, setAntallSvartNei] = useState<number>(0);
    const [antallUbesvart, setAntallUbesvart] = useState<number>(0);

    useEffect(() => {
        const url =
            `${foresporslerApiUrl}?` +
            new URLSearchParams({
                fraOgMed: formaterDatoTilApi(fraOgMed),
                tilOgMed: formaterDatoTilApi(tilOgMed),
                navKontor,
            });

        const hentData = async () => {
            const respons = await fetch(url, {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'same-origin',
            });

            if (respons.ok) {
                const forespørsler: AntallForesporslerInboundDto = await respons.json();

                setAntallSvartJa(forespørsler.antallSvartJa);
                setAntallSvartNei(forespørsler.antallSvartNei);
                setAntallUbesvart(forespørsler.antallUbesvart);
            }
        };
        hentData();
    }, [navKontor, fraOgMed, tilOgMed]);

    const finnProsent = (tall: number) => {
        return Math.round((tall / antallTotalt) * 100) + '%';
    };

    const antallTotalt = antallSvartJa + antallSvartNei + antallUbesvart;

    return (
        <Panel border={true}>
            <Heading level="2" size="small">
                Stillinger delt med kandidater i Aktivitetsplanen
            </Heading>
            <div className={css.delingstatistikk}>
                <Svartelling
                    svartellingIkon={SvartellingIkon.Delt}
                    oppsummering={antallTotalt + ''}
                    detaljer="stillinger har blitt delt med kandidater i Aktivitetsplanen"
                    forklaring=""
                ></Svartelling>
                <Svartelling
                    svartellingIkon={SvartellingIkon.Ja}
                    oppsummering={finnProsent(antallSvartJa) + ' svarte ja'}
                    detaljer={`til at CV-en kan deles med arbeidsgiver
            `}
                    forklaring={`(${antallSvartJa} av ${antallTotalt})`}
                ></Svartelling>
                <Svartelling
                    svartellingIkon={SvartellingIkon.Nei}
                    oppsummering={finnProsent(antallSvartNei) + ' svarte nei'}
                    detaljer={`til at CV-en kan deles med arbeidsgiver`}
                    forklaring={`(${antallSvartNei} av ${antallTotalt})`}
                ></Svartelling>
                <Svartelling
                    svartellingIkon={SvartellingIkon.SvarteIkke}
                    oppsummering={finnProsent(antallUbesvart) + ' svarte ikke'}
                    detaljer={`på om CV-en kan deles med arbeidsgiver`}
                    forklaring={`(${antallUbesvart} av ${antallTotalt})`}
                ></Svartelling>
            </div>
        </Panel>
    );
};

export default Forespørsler;
