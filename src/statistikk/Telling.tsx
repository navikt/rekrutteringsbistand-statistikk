import React, { FunctionComponent } from 'react';
import { Element, Sidetittel } from 'nav-frontend-typografi';
import './Telling.less';

type Props = {
    tall: number | string;
    beskrivelse: string;
    className: string;
};

const Telling: FunctionComponent<Props> = ({ tall, beskrivelse, className }) => {
    const klassenavn = 'telling ' + className;

    return (
        <div className={klassenavn}>
            <Sidetittel tag="p" className="telling__tall blokk-xxs">
                {tall}
            </Sidetittel>
            <Element>{beskrivelse}</Element>
        </div>
    );
};

export default Telling;
