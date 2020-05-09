import { useStore } from 'effector-react';
import { Counter } from '../CounterButton';
import React from 'react';

const ClicksShower = ({ counterClickStore }) => {
    const clicksCount = useStore(counterClickStore);
    return <div>
        clicks count: {clicksCount}
        <Counter />
    </div>;
};

export default ClicksShower;