import React, { FunctionComponent } from 'react';
import Telling from './Telling';
import useUtfallsstatistikk from './useUtfallsstatistikk';
import statistikkCss from './Statistikk.module.css';
import tellingCss from './Telling.module.css';
import TiltaksstatistikkKategori from './TiltaksstatistikkKategori';

type Props = {
    navKontor: string;
    fraOgMed: Date;
    tilOgMed: Date;
};

const Tiltaksstatistikk: FunctionComponent<Props> = ({ navKontor, fraOgMed, tilOgMed }) => {
    const {} = useUtfallsstatistikk(navKontor, fraOgMed, tilOgMed);

    return (
        <div className={statistikkCss.tall}>
            <TiltaksstatistikkKategori kategorinavn="Arbeidstrening"></TiltaksstatistikkKategori>
            <TiltaksstatistikkKategori kategorinavn="Lønnstilskudd"></TiltaksstatistikkKategori>
            <TiltaksstatistikkKategori kategorinavn="Mentorordning"></TiltaksstatistikkKategori>
            <TiltaksstatistikkKategori kategorinavn="Andre tiltak og virkemidler"></TiltaksstatistikkKategori>
        </div>
    );
};

export default Tiltaksstatistikk;
