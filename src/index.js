import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Link, Switch, useLocation } from 'react-router-dom';

const Test = () => <div>
    <h1>Test page</h1>
    <div style={{
        backgroundColor: 'green'
    }}>
        Test component page
    </div>
    <Link to="/">Click me</Link>
</div>;

const Test2 = ({ match }) => {
    const params  = new URLSearchParams(useLocation().search);

    return <div>
        <h1>Test2 page</h1>
        <div style={{
            backgroundColor: 'red'
        }}>
            Test2 component page
        </div>
        <Link to="/">Go to main</Link>
        {[...params].map(([key, value], index) => {
            if (key === 'json') {
                try {
                    console.log(JSON.parse(value));
                } catch {}
            }

            return <div key={index}>
                <div>
                    {key}={value}
                </div>
                <br />
            </div>;
        })}
    </div>;
};

render(<Router >
    <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/test" component={Test}></Route>
        <Route path="/test2" component={Test2}></Route>
    </Switch>
</Router>, document.getElementById('root'));