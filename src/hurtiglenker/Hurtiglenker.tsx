import React, { FunctionComponent, ReactNode } from 'react';
import { ReactComponent as Liste } from './ikoner/Liste.svg';
import { ReactComponent as Blyant } from './ikoner/Blyant.svg';
import { ReactComponent as Kvinne } from './ikoner/Kvinne.svg';
import { ReactComponent as Checkliste } from './ikoner/Checkliste.svg';
import { LenkepanelBase } from 'nav-frontend-lenkepanel';
import { Systemtittel } from 'nav-frontend-typografi';
import './Hurtiglenker.less';

const Lenker: FunctionComponent = () => {
    return (
        <nav className="hurtiglenker">
            <LenkepanelMedIkon
                ikon={<Liste />}
                href="/stillinger/minestillinger"
                tittel="Mine stillinger"
            />
            <LenkepanelMedIkon
                ikon={<Blyant />}
                href="/stillinger/stilling"
                tittel="Opprett ny stilling"
            />
            <LenkepanelMedIkon ikon={<Kvinne />} href="/stillinger" tittel="Finn kandidater" />
            <LenkepanelMedIkon
                ikon={<Checkliste />}
                href="/kandidater/lister"
                tittel="Se kandidatlister"
            />
        </nav>
    );
};

type LenkepanelMedIkonProps = {
    ikon: ReactNode;
    tittel: string;
    href: string;
};

const LenkepanelMedIkon: FunctionComponent<LenkepanelMedIkonProps> = ({ ikon, tittel, href }) => (
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
