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
                <Heading spacing level="2" size="large">
                    Stillinger delt med kandidater i Aktivitetsplanen
                </Heading>
                <div className={css.delingstatistikk}>
                    <Svartelling
                        svartellingIkon={SvartellingIkon.Delt}
                        antall={12}
                        tellingtekst="tekst1"
                    ></Svartelling>
                    <Svartelling
                        svartellingIkon={SvartellingIkon.Ja}
                        antall={13}
                        tellingtekst="tekst2"
                    ></Svartelling>
                    <Svartelling
                        svartellingIkon={SvartellingIkon.Nei}
                        antall={14}
                        tellingtekst="tekst3"
                    ></Svartelling>
                    <Svartelling
                        svartellingIkon={SvartellingIkon.Ubesvart}
                        antall={15}
                        tellingtekst="tekst4"
                    ></Svartelling>
                </div>
            </Panel>
        </div>
    );
};

const fraOgMed = trettiDagerSiden();
const tilOgMed = idag();

export default Statistikk;
