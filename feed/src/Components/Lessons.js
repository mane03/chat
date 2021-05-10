import React from 'react';

function Lessons() {
    return (
        <>
            <div className="lessons">
                <h2 className="homework__title">Current lessons</h2>
                <ul className="homework__list">
                    <li className="homework__item">
                        <h3 className="item__title">Read book</h3>
                    </li>
                    <li className="homework__item">
                        <h3 className="item__title">Read more book</h3>
                    </li>
                    <li className="homework__item">
                        <h3 className="item__title">Read lots of books</h3>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Lessons;