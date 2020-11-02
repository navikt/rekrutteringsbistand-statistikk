import Lenkepanel from 'nav-frontend-lenkepanel';
import React, { FunctionComponent } from 'react';

const Lenker: FunctionComponent = () => {
    return (
        <nav>
            <Lenkepanel border href="/stillinger/minestillinger" tittelProps="systemtittel">
                Mine stillinger
            </Lenkepanel>
        </nav>
    );
};

export default Lenker;
