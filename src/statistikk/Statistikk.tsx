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
    const [fraDato, setFraDato] = useState<Date | null>(null);
    const [tilDato, setTilDato] = useState<Date | null>(null);

    const onTidsperiodeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log('eeee', new Date(+event.target.value));
    };

    const antallMånederForHistorikk = 12;
    const tid = Array<Number>(antallMånederForHistorikk)
        .fill(0, 0, antallMånederForHistorikk)
        .map((_, i) => {
            const statistikkTidspunkt = new Date();
            statistikkTidspunkt.setMonth(statistikkTidspunkt.getMonth() - i);

            const fraOgMed = førsteDagIMåned(new Date(statistikkTidspunkt));
            return fraOgMed;
        });

    const fraOgMed = førsteDagIMåned(new Date());
    const tilOgMed = sisteDagIMåned(fraOgMed);

    return (
        <div className={css.statistikk}>
            <Heading level="1" size="medium" className={css.tittel}>
                Ditt NAV-kontor
            </Heading>
            <p className={css.tidsperiode}>
                <Select label="" onChange={onTidsperiodeChange}>
                    {tid.map((tid) => (
                        <option value={tid.getTime()} key={tid.getMilliseconds()}>
                            {formaterDatoTilVisning(tid)} til{' '}
                            {formaterDatoTilVisning(sisteDagIMåned(new Date(tid)))}
                        </option>
                    ))}
                </Select>
            </p>
            <Utfallsstatistikk navKontor={navKontor} fraOgMed={fraOgMed} tilOgMed={tilOgMed} />
            <Forespørsler navKontor={navKontor} fraOgMed={fraOgMed} tilOgMed={tilOgMed} />
        </div>
    );
};

export default Statistikk;
