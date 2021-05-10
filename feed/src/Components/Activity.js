import React from 'react';
import {Progress} from "reactstrap";

function Activity() {
    return (
        <div>
            <h3 className="activity__title">
                <div className="progress__title">Activity Level: 28%</div>
                <Progress barStyle={{backgroundColor: "#342A54"}}
                          barClassName="progress"
                          value="28" />
                </h3>
        </div>
    );
}

export default Activity;