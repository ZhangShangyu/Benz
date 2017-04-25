import React from 'react';
import {Row, Col} from 'antd';

export default class HouseContent extends React.Component {

    render() {
        const style = {"marginTop": this.props.topMagin}
        return (
            <footer style={style}>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className='footer'>
                       &copy;&nbsp;House Content
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        )
    }
}
