import React, { FunctionComponent, useEffect, useState } from 'react';
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi';
import { idag, trettiDagerSiden, formaterDatoTilApi, formaterDatoTilVisning } from '../datoUtils';
import Telling from './Telling';
import './Statistikk.less';

type Props = {
    navKontor: string;
};

type AntallFormidlingerInboundDto = {
    antallPresentert: number;
    antallFåttJobben: number;
};

const apiBasePath = '/rekrutteringsbistand-statistikk/api';
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
            } else {
                if (respons.status === 401) {
                    window.location.href = `/rekrutteringsbistand-statistikk/oauth2/login?redirect=${window.location.href}`;
                }
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
            <Systemtittel tag="h1" className="blokk-xxs">
                Ditt NAV-kontor
            </Systemtittel>
            <Normaltekst className="blokk-l">
                {formaterDatoTilVisning(fraOgMed)} - {formaterDatoTilVisning(tilOgMed)}
            </Normaltekst>
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
