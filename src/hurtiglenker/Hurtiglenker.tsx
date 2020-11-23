import React, { FunctionComponent } from 'react';
import liste from './ikoner/liste.svg';
import blyant from './ikoner/blyant.svg';
import kvinne from './ikoner/kvinne.svg';
import checkliste from './ikoner/checkliste.svg';
import { LenkepanelBase } from 'nav-frontend-lenkepanel';
import { Systemtittel } from 'nav-frontend-typografi';
import { Link } from 'react-router-dom';
import './Hurtiglenker.less';

const Hurtiglenker: FunctionComponent = () => {
    return (
        <nav className="hurtiglenker">
            <LenkepanelMedIkon
                erSammeApp
                href="/stillinger/minestillinger"
                tittel="Mine stillinger"
                ikonSrc={liste}
            />
            <LenkepanelMedIkon
                erSammeApp
                href="/stillinger/stilling"
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
    erSammeApp?: boolean;
}> = ({ tittel, href, ikonSrc, erSammeApp }) => (
    <LenkepanelBase
        className="hurtiglenker__lenkepanel"
        border
        linkCreator={(props) =>
            erSammeApp ? (
                <Link to={href} {...props}>
                    {props.children}
                </Link>
            ) : (
                <a href={href} {...props}>
                    {props.children}
                </a>
            )
        }
        href={href}
    >
        <div className="hurtiglenker__lenkeinnhold">
            <div className="hurtiglenker__lenkeikon">
                <img src={ikonSrc} alt="" />
            </div>
            <Systemtittel tag="span" className="hurtiglenker__lenketittel lenkepanel__heading">
                {tittel}
            </Systemtittel>
        </div>
    </LenkepanelBase>
);

export default Hurtiglenker;
