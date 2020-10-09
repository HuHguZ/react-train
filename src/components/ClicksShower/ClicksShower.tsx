import React from 'react';
import css from './style.scss';

console.log(css.class);

const ClicksShower = ({ counterClickStore }) => {
    return <div className={css.class}>clicks count: {232}</div>;
};

export default ClicksShower;
