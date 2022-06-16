import React, { FunctionComponent } from 'react';
import { Dialog, DialogSuccess, SpeechBubble } from '@navikt/ds-icons';
import css from './Svartelling.module.css';
import { Detail, Label } from '@navikt/ds-react';
import { ReactComponent as Kryssikon } from './kryss.svg';

export enum SvartellingIkon {
    Delt,
    Ja,
    Nei,
    SvarteIkke,
}

type Props = {
    svartellingIkon: SvartellingIkon;
    oppsummering: string;
    detaljer: string;
    forklaring: string;
};

const Svartelling: FunctionComponent<Props> = ({
    svartellingIkon,
    oppsummering,
    detaljer,
    forklaring,
}) => {
    const ikon = (valgtIkon: SvartellingIkon) => {
        switch (valgtIkon) {
            case SvartellingIkon.Delt:
                return <Dialog className={css.antallStillinger}></Dialog>;
            case SvartellingIkon.Ja:
                return <DialogSuccess className={css.svartJa}></DialogSuccess>;
            case SvartellingIkon.Nei:
                return (
                    <>
                        <span className={css.xSign}>
                            <Kryssikon />
                        </span>
                        <SpeechBubble className={css.svartNei}></SpeechBubble>
                    </>
                );
            case SvartellingIkon.SvarteIkke:
                return <SpeechBubble className={css.ubesvart}></SpeechBubble>;
        }
    };

    return (
        <div className={css.svartelling}>
            {ikon(svartellingIkon)}
            <Label className={css.oppsummering}>{oppsummering}</Label>
            <Detail size="small" className={css.detaljer}>
                {detaljer}
            </Detail>
            <Detail size="small" className={css.detaljer}>
                {forklaring}
            </Detail>
        </div>
    );
};

export default Svartelling;
