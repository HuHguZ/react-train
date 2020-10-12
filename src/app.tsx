import React, { useState, FunctionComponent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { DatePicker, Button, Pagination, Select } from 'antd';
import fs from 'fs';
import ClicksShower from './components/ClicksShower';
import 'antd/dist/antd.less';

const App: FunctionComponent = () => {
    const [opened, setOpened] = useState(true);
    console.log(opened);

    const onClick = () => {
        setOpened((prev) => !prev);
    };

    return (
        <div>
            <div />
            test app
            <ClicksShower counterClickStore="sds" />
            <DatePicker disabled={opened} />
            <Button onClick={onClick}>Нажми меня</Button>
            <Pagination disabled={opened} total={50} showSizeChanger />
            <Select disabled={opened} />
        </div>
    );
};

export default App;
