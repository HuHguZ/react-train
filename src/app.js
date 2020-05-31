import React, { useState } from 'react';
import { Counter, counterClickStore } from './components/CounterButton';
import ClicksShower from './components/ClicksShower';
import { Link, Redirect } from 'react-router-dom';

const App = () => {
    const [clicked, setClicked] = useState(false);
    const [json, setJson] = useState("");

    return <div>
        <input type="text" onChange={e => setJson(e.target.value)} value={json} /><br />
        <Link to="/">Main</Link><br />
        <Link to="/test">Test 1</Link><br />
        <div style={{
            backgroundColor: 'red',
            textDecoration: 'none',
            color: 'black'
        }}>
            <Link to={`/test2?test=ahdsk&param=adsd&json=${json}`}>
                Test 2           
            </Link>
        </div>
        <Counter />
        <Counter />
        <Counter />
        <ClicksShower counterClickStore={counterClickStore}/>
        <ClicksShower counterClickStore={counterClickStore} />
        <ClicksShower counterClickStore={counterClickStore} /><br />
        <button onClick={() => setClicked(true)}>
            {clicked ? <Redirect to="/test" /> : null}
            Click me to go to test
        </button>
    </div>;
};

export default App;