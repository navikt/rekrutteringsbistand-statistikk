import React, { FunctionComponent } from 'react';
import { Dialog, DialogSuccess, SpeechBubble } from '@navikt/ds-icons';
import css from './Svartelling.module.css';
import { Detail, Label } from '@navikt/ds-react';

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

const svgX = (
    <svg
        width="1em"
        height="1em"
        viewBox="0 2 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.5 5L17 8.429 13.428 12 17 15.571 15.571 17 12 13.428 8.429 17 7 15.571 10.572 12 7 8.429 8.429 7 12 10.572 15.571 7Z"
            fill="currentColor"
        />
    </svg>
);

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
                        <span className={css.xSign}> {svgX}</span>
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
