import React, { FunctionComponent, useEffect, useState } from 'react';
import { idag, trettiDagerSiden, formaterDatoTilApi, formaterDatoTilVisning } from '../datoUtils';
import Telling from './Telling';
import { Heading } from '@navikt/ds-react';
import Body from '@navikt/ds-react/esm/table/Body';
import './Statistikk.css';

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
        <div className="statistikk">
            <Heading level="1" size="medium">
                Ditt NAV-kontor
            </Heading>
            <Body className="blokk-l">
                {formaterDatoTilVisning(fraOgMed)} - {formaterDatoTilVisning(tilOgMed)}
            </Body>
            <div className="statistikk__tall">
                <Telling
                    tall={antallFåttJobben}
                    beskrivelse={beskrivelseForAntallFåttJobben}
                    className="telling--fått-jobb"
                />
                <Telling
                    tall={antallPresentert}
                    beskrivelse={beskrivelseForAntallPresentert}
                    className="telling--presentert"
                />
            </div>
        </div>
    );
};

const fraOgMed = trettiDagerSiden();
const tilOgMed = idag();

export default Statistikk;
