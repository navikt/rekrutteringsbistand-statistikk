import React, { FunctionComponent, useEffect, useState } from 'react';
import { Heading, Panel } from '@navikt/ds-react';
import { idag, trettiDagerSiden, formaterDatoTilApi, formaterDatoTilVisning } from '../datoUtils';
import Telling from './Telling';
import css from './Statistikk.module.css';
import tellingCss from './Telling.module.css';
import Svartelling, { SvartellingIkon } from './Svartelling';

type Props = {
    navKontor: string;
};

type AntallFormidlingerInboundDto = {
    antallPresentert: number;
    antallFåttJobben: number;
};

const apiBasePath = '/statistikk-api';
export const statistikkApiUrl = `${apiBasePath}/statistikk`;

const Statistikk: FunctionComponent<Props> = ({ navKontor }) => {
    const [antallPresentert, setAntallPresentert] = useState<number>(0);
    const [antallFåttJobben, setAntallFåttJobben] = useState<number>(0);

    useEffect(() => {
        const url =
            `${statistikkApiUrl}?` +
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
                const formidlinger: AntallFormidlingerInboundDto = await respons.json();

                setAntallPresentert(formidlinger.antallPresentert);
                setAntallFåttJobben(formidlinger.antallFåttJobben);
            }
        };
        hentData();
    }, [navKontor]);

    const beskrivelseForAntallFåttJobben = `${
        antallFåttJobben === 1 ? 'person' : 'personer'
    } har fått jobb`;
    const beskrivelseForAntallPresentert = `${
        antallPresentert === 1 ? 'person' : 'personer'
    } har blitt presentert for arbeidsgiver`;

    const svarTotalt: number = 120;
    const svarteJa: number = 22;
    const svarteNei: number = 30;
    const svarteIkke: number = 40;

    const finnProsent = (tall: number) => {
        return Math.round((tall / svarTotalt) * 100) + '%';
    };

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
        </div>
    );
};

const fraOgMed = trettiDagerSiden();
const tilOgMed = idag();

export default Statistikk;
