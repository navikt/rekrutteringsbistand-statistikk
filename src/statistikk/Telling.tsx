import React, { FunctionComponent } from 'react';
import { BodyShort } from '@navikt/ds-react';
import './Telling.css';

type Props = {
    tall: number;
    beskrivelse: string;
    className: string;
};

const Telling: FunctionComponent<Props> = ({ tall, beskrivelse, className }) => {
    const klassenavn = 'telling ' + className;

    return (
        <div className={klassenavn}>
            <p className="telling__tall blokk-xxs">{tall}</p>
            <BodyShort>{beskrivelse}</BodyShort>
        </div>
    );
};

export default Telling;
