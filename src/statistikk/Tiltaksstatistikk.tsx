import React, { FunctionComponent } from 'react';
import { Heading } from '@navikt/ds-react';
import useUtfallsstatistikk, { TiltakStatistikkInboundDto } from './useUtfallsstatistikk';
import tiltaksstatistikkCss from './Tiltaksstatistikk.module.css';
import TiltaksstatistikkKategori from './TiltaksstatistikkKategori';

type Props = {
    tiltakstatistikk: TiltakStatistikkInboundDto;
};

const Tiltaksstatistikk: FunctionComponent<Props> = ({ tiltakstatistikk }) => {
    return (
        <div className={tiltaksstatistikkCss.tiltaksstatistikk}>
            <Heading level="1" size="medium" className={tiltaksstatistikkCss.tittel}>
                Tiltak og virkemidler som har ført til at folk har fått jobb
            </Heading>
            <div className={tiltaksstatistikkCss.tiltaksstatistikkkategori}>
                <TiltaksstatistikkKategori
                    kategorinavn="Arbeidstrening"
                    antallTotal={tiltakstatistikk.antallFåttJobben}
                    antallTiltak={tiltakstatistikk.antallFåttJobbenArbeidstrening}
                ></TiltaksstatistikkKategori>
                <TiltaksstatistikkKategori
                    kategorinavn="Lønnstilskudd"
                    antallTotal={tiltakstatistikk.antallFåttJobben}
                    antallTiltak={tiltakstatistikk.antallFåttJobbenLønnstilskudd}
                ></TiltaksstatistikkKategori>
                <TiltaksstatistikkKategori
                    kategorinavn="Mentorordning"
                    antallTotal={tiltakstatistikk.antallFåttJobben}
                    antallTiltak={tiltakstatistikk.antallFåttJobbenMentorordning}
                ></TiltaksstatistikkKategori>
                <TiltaksstatistikkKategori
                    kategorinavn="Andre tiltak og virkemidler"
                    antallTotal={tiltakstatistikk.antallFåttJobben}
                    antallTiltak={tiltakstatistikk.antallFåttJobbenAndreTiltak}
                ></TiltaksstatistikkKategori>
            </div>
        </div>
    );
};

export default Tiltaksstatistikk;
