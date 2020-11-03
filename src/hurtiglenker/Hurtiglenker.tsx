import React, { FunctionComponent, ReactNode } from 'react';
import liste from './ikoner/liste.svg';
import blyant from './ikoner/blyant.svg';
import kvinne from './ikoner/kvinne.svg';
import checkliste from './ikoner/checkliste.svg';
import { LenkepanelBase } from 'nav-frontend-lenkepanel';
import { Systemtittel } from 'nav-frontend-typografi';
import './Hurtiglenker.less';

const Lenker: FunctionComponent = () => {
    return (
        <nav className="hurtiglenker">
            <LenkepanelMedIkon
                ikon={<img src={liste} alt="" />}
                href="/stillinger/minestillinger"
                tittel="Mine stillinger"
            />
            <LenkepanelMedIkon
                ikon={<img src={blyant} alt="" />}
                href="/stillinger/stilling"
                tittel="Opprett ny stilling"
            />
            <LenkepanelMedIkon
                ikon={<img src={kvinne} alt="" />}
                href="/stillinger"
                tittel="Finn kandidater"
            />
            <LenkepanelMedIkon
                ikon={<img src={checkliste} alt="" />}
                href="/kandidater/lister"
                tittel="Se kandidatlister"
            />
        </nav>
    );
};

const LenkepanelMedIkon: FunctionComponent<{
    ikon: ReactNode;
    tittel: string;
    href: string;
}> = ({ ikon, tittel, href }) => (
    <LenkepanelBase className="hurtiglenker__lenkepanel" border href={href}>
        <div className="hurtiglenker__lenkeinnhold">
            <div className="hurtiglenker__lenkeikon">{ikon}</div>
            <Systemtittel className="hurtiglenker__lenketittel lenkepanel__heading">
                {tittel}
            </Systemtittel>
        </div>
    </LenkepanelBase>
);

export default Lenker;
