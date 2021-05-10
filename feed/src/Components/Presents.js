import React from 'react';
import present from '../assets/images/present1.svg'
import present2 from '../assets/images/present2.svg'
import present3 from '../assets/images/present3.svg'

function Presents() {
    return (
        <div className="presents">
            <img src={present} alt="present" className="presents__icon"/>
            <img src={present2} alt="present" className="presents__icon"/>
            <img src={present3} alt="present" className="presents__icon"/>
        </div>
    );
}

export default Presents;