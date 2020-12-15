import React from 'react';
import { Tabs, Row, Col } from 'antd';

const { TabPane } = Tabs;

const Main = () => {
    return (
        <>
            <Row gutter={5} justify="center" style={{ margin: '10px' }}>
                <Col span={24}>
                    <Tabs defaultActiveKey="1" type="card" size="middle">
                        <TabPane tab="Card Tab 1" key="1">
                            <div style={{ height: '200px', backgroundColor: 'rosybrown' }}>1</div>
                        </TabPane>
                        <TabPane tab="Card Tab 2" key="2">
                            Content of card tab 2
                        </TabPane>
                        <TabPane tab="Card Tab 3" key="3">
                            Content of card tab 3
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
};

export default Main;
