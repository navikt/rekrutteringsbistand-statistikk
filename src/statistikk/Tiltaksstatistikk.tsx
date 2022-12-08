import React, { FunctionComponent } from 'react';
import { Heading } from '@navikt/ds-react';
import useUtfallsstatistikk from './useUtfallsstatistikk';
import statistikkCss from './Statistikk.module.css';
import tiltaksstatistikkCss from './Tiltaksstatistikk.module.css';
import TiltaksstatistikkKategori from './TiltaksstatistikkKategori';

type Props = {
    navKontor: string;
    fraOgMed: Date;
    tilOgMed: Date;
};

const Tiltaksstatistikk: FunctionComponent<Props> = ({ navKontor, fraOgMed, tilOgMed }) => {
    const {} = useUtfallsstatistikk(navKontor, fraOgMed, tilOgMed);

    return (
        <div className={tiltaksstatistikkCss.tiltaksstatistikk}>
            <Heading level="1" size="medium">
                Tiltak og virkemidler som har ført til at folk har fått jobb
            </Heading>
            <div className={tiltaksstatistikkCss.tiltaksstatistikkkategori}>
                <TiltaksstatistikkKategori kategorinavn="Arbeidstrening"></TiltaksstatistikkKategori>
                <TiltaksstatistikkKategori kategorinavn="Lønnstilskudd"></TiltaksstatistikkKategori>
                <TiltaksstatistikkKategori kategorinavn="Mentorordning"></TiltaksstatistikkKategori>
                <TiltaksstatistikkKategori kategorinavn="Andre tiltak og virkemidler"></TiltaksstatistikkKategori>
            </div>
        </div>
    );
};

export default Tiltaksstatistikk;
