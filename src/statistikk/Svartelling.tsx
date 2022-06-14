import React, { FunctionComponent } from 'react';
import { Dialog, DialogSuccess, SpeechBubble } from '@navikt/ds-icons';

export enum SvartellingIkon {
    Delt,
    Ja,
    Nei,
    Ubesvart,
}

type Props = {
    svartellingIkon: SvartellingIkon;
    antall: number;
    tellingtekst: string;
};

const Svartelling: FunctionComponent<Props> = ({ svartellingIkon, antall, tellingtekst }) => {
    const ikon = (valgtIkon: SvartellingIkon) => {
        switch (valgtIkon) {
            case SvartellingIkon.Delt:
                return <Dialog></Dialog>;
            case SvartellingIkon.Ja:
                return <DialogSuccess></DialogSuccess>;
            case SvartellingIkon.Nei:
                return <SpeechBubble></SpeechBubble>;
            case SvartellingIkon.Ubesvart:
                return <SpeechBubble></SpeechBubble>;
        }
    };

    return (
        <div>
            {ikon(svartellingIkon)}
            <div>{antall}</div>
            <div>{tellingtekst}</div>
        </div>
    );
};

export default Svartelling;
