import React, { useState, FunctionComponent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { DatePicker } from 'antd';
import ClicksShower from './components/ClicksShower';
import 'antd/dist/antd.less';

const App: FunctionComponent = () => {
    return (
        <div>
            <div />
            test app
            <ClicksShower counterClickStore="sds" />
            <DatePicker />
        </div>
    );
};

export default App;
