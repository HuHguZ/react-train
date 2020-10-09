import React, { useState, FunctionComponent } from 'react';
import ClicksShower from './components/ClicksShower';
import { Link, Redirect } from 'react-router-dom';
import { DatePicker } from 'antd';
import 'antd/dist/antd.less';

const App: FunctionComponent = () => {
    return (
        <div>
            <div></div>
            test app<ClicksShower>dfds</ClicksShower>
        </div>
    );
};

export default App;
