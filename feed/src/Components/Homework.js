import React from 'react';

function Homework() {
    return (
        <>
            <div className="homework">
                <h2 className="homework__title">Homework</h2>
                <ul className="homework__list">
                    <li className="homework__item">
                        <h3 className="item__title">write the homework</h3>
                        <span className="item__timeline">2 days left</span>
                    </li>
                    <li className="homework__item">
                        <h3 className="item__title">write jS code</h3>
                        <span className="item__timeline">belated</span>
                    </li>
                    <li className="homework__item">
                        <h3 className="item__title">write the homework</h3>
                        <span className="item__timeline">remains 2 days</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Homework;