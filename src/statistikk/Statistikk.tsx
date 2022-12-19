import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { Heading, Select } from '@navikt/ds-react';
import { formaterDatoTilVisning, førsteDagIMåned, sisteDagIMåned } from '../datoUtils';
import Forespørsler from './Forespørsler';
import Utfallsstatistikk from './Utfallsstatistikk';
import css from './Statistikk.module.css';

type Props = {
    navKontor: string;
};

const Statistikk: FunctionComponent<Props> = ({ navKontor }) => {
    const [startDatoPeriode, setStartDatoPeriode] = useState<Date>(førsteDagIMåned(new Date()));

    const onTidsperiodeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const startDatoPeriode = new Date(+event.target.value);
        setStartDatoPeriode(startDatoPeriode);
    };

    const antallMånederForHistorikk = 12;
    const tidsperioder = Array<Number>(antallMånederForHistorikk)
        .fill(0, 0, antallMånederForHistorikk)
        .map((_, i) => {
            const statistikkTidspunkt = new Date();
            statistikkTidspunkt.setMonth(statistikkTidspunkt.getMonth() - i);

            const fraOgMed = førsteDagIMåned(new Date(statistikkTidspunkt));
            return fraOgMed;
        });

    const fraOgMed = startDatoPeriode;
    const tilOgMed = sisteDagIMåned(new Date(startDatoPeriode));

    return (
        <div className={css.statistikk}>
            <Heading level="1" size="medium" className={css.tittel}>
                Ditt NAV-kontor
            </Heading>
            <div className={css.tidsperiode}>
                <Select label="" onChange={onTidsperiodeChange}>
                    {tidsperioder.map((tidsperiode) => (
                        <option value={tidsperiode.getTime()} key={tidsperiode.getTime()}>
                            {formaterDatoTilVisning(tidsperiode)} til{' '}
                            {formaterDatoTilVisning(sisteDagIMåned(new Date(tidsperiode)))}
                        </option>
                    ))}
                </Select>
            </div>
            <Utfallsstatistikk navKontor={navKontor} fraOgMed={fraOgMed} tilOgMed={tilOgMed} />
            <Forespørsler navKontor={navKontor} fraOgMed={fraOgMed} tilOgMed={tilOgMed} />
        </div>
    );
};

export default Statistikk;
