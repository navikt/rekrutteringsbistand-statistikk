import React, { FunctionComponent } from 'react';
import liste from './ikoner/liste.svg';
import blyant from './ikoner/blyant.svg';
import kvinne from './ikoner/kvinne.svg';
import checkliste from './ikoner/checkliste.svg';
import { Heading, LinkPanel } from '@navikt/ds-react';
import css from './Hurtiglenker.module.css';

const Hurtiglenker: FunctionComponent = () => {
    return (
        <nav className={css.hurtiglenker}>
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
    <LinkPanel href={href} className={css.lenkepanel}>
        <div className={css.lenkeinnhold}>
            <div className={css.lenkeikon}>
                <img src={ikonSrc} alt="" />
            </div>
            <Heading level="2" size="medium">
                {tittel}
            </Heading>
        </div>
    </LinkPanel>
);

export default Hurtiglenker;
