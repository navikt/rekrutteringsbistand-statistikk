import React, { FunctionComponent } from 'react';
import css from './Telling.module.css';
import classNames from 'classnames';

type Props = {
    tall: number;
    beskrivelse: string;
    className: string;
};

const Telling: FunctionComponent<Props> = ({ tall, beskrivelse, className }) => {
    const klassenavn = classNames(css.telling, className);

    return (
        <p className={klassenavn}>
            <span className={css.tall}>{tall}</span>
            {beskrivelse}
        </p>
    );
};

export default Telling;
