import React, { FunctionComponent } from 'react';
import { Heading } from '@navikt/ds-react';
import { TiltakStatistikkInboundDto } from './useUtfallsstatistikk';
import tiltaksstatistikkCss from './Tiltaksstatistikk.module.css';
import TiltaksstatistikkKategori from './TiltaksstatistikkKategori';

type Props = {
    tiltakstatistikk: TiltakStatistikkInboundDto;
    antallFåttJobben: number;
};

const Tiltaksstatistikk: FunctionComponent<Props> = ({ tiltakstatistikk, antallFåttJobben }) => {
    const totaltAntall = tiltakstatistikk.antallFåttJobben + antallFåttJobben;
    return (
        <div className={tiltaksstatistikkCss.tiltaksstatistikk}>
            <Heading level="1" size="medium" className={tiltaksstatistikkCss.tittel}>
                Tiltak og virkemidler som har ført til at folk har fått jobb
            </Heading>
            <div className={tiltaksstatistikkCss.tiltaksstatistikkkategori}>
                <TiltaksstatistikkKategori
                    kategorinavn="Arbeidstrening"
                    antallTotal={totaltAntall}
                    antallTiltak={tiltakstatistikk.antallFåttJobbenArbeidstrening}
                ></TiltaksstatistikkKategori>
                <TiltaksstatistikkKategori
                    kategorinavn="Lønnstilskudd"
                    antallTotal={totaltAntall}
                    antallTiltak={tiltakstatistikk.antallFåttJobbenLønnstilskudd}
                ></TiltaksstatistikkKategori>
                <TiltaksstatistikkKategori
                    kategorinavn="Mentorordning"
                    antallTotal={totaltAntall}
                    antallTiltak={tiltakstatistikk.antallFåttJobbenMentorordning}
                ></TiltaksstatistikkKategori>
                <TiltaksstatistikkKategori
                    kategorinavn="Andre tiltak og virkemidler"
                    antallTotal={totaltAntall}
                    antallTiltak={tiltakstatistikk.antallFåttJobbenAndreTiltak}
                ></TiltaksstatistikkKategori>
            </div>
        </div>
    );
};

export default Tiltaksstatistikk;
