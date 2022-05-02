import React, { FunctionComponent } from 'react';
import liste from './ikoner/liste.svg';
import blyant from './ikoner/blyant.svg';
import kvinne from './ikoner/kvinne.svg';
import checkliste from './ikoner/checkliste.svg';
import { Heading, LinkPanel } from '@navikt/ds-react';
import './Hurtiglenker.less';

const Hurtiglenker: FunctionComponent = () => {
    return (
        <nav className="hurtiglenker">
            <LenkepanelMedIkon
                href="/stillinger/minestillinger"
                tittel="Mine stillinger"
                ikonSrc={liste}
            />
            <LenkepanelMedIkon
                href="/stillinger/minestillinger?visOpprettStillingModal"
                tittel="Opprett ny stilling"
                ikonSrc={blyant}
            />
            <LenkepanelMedIkon href="/kandidater" tittel="Finn kandidater" ikonSrc={kvinne} />
            <LenkepanelMedIkon
                href="/kandidater/lister"
                tittel="Se kandidatlister"
                ikonSrc={checkliste}
            />
        </nav>
    );
};

const LenkepanelMedIkon: FunctionComponent<{
    tittel: string;
    href: string;
    ikonSrc: string;
}> = ({ tittel, href, ikonSrc }) => (
    <LinkPanel href={href} className="hurtiglenker__lenkepanel">
        <div className="hurtiglenker__lenkeinnhold">
            <div className="hurtiglenker__lenkeikon">
                <img src={ikonSrc} alt="" />
            </div>
            <Heading
                level="2"
                size="xlarge"
                className="hurtiglenker__lenketittel lenkepanel__heading"
            >
                {tittel}
            </Heading>
        </div>
    </LinkPanel>
);

export default Hurtiglenker;
