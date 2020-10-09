import React from 'react';
import css from './style.scss';

const test = 23;

console.log(css.class);

const ClicksShower = ({ counterClickStore }) => {
    return (
        <div className={css.class}>
            clicks count: {Math.random()}
            <div id="sd" />
        </div>
    );
};

export default ClicksShower;
