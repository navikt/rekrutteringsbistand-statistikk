import React, { FunctionComponent } from 'react';
import Body from '@navikt/ds-react/esm/table/Body';
import './Telling.less';

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
            <Body>{beskrivelse}</Body>
        </div>
    );
};

export default Telling;
