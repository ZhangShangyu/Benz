import React from 'react';
import {Row, Col} from 'antd';
import ConditionBox from  './conditionBox'


export default class HouseContent extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <ConditionBox/>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
