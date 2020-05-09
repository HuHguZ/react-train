import React from 'react';
import { Counter, counterClickStore } from './components/CounterButton';
import ClicksShower from './components/ClicksShower';

const App = () => {
    return <div>
        <Counter />
        <Counter />
        <Counter />
        <ClicksShower counterClickStore={counterClickStore}/>
        <ClicksShower counterClickStore={counterClickStore} />
        <ClicksShower counterClickStore={counterClickStore} />
    </div>;
};

export default App;