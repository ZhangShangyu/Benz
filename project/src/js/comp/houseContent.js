import React from 'react';
import {Row, Col} from 'antd';
import ConditionBox from  './conditionBox'
import HouseImgBlock from './houseImgBlock'


export default class HouseContent extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col span={4}></Col>
          <Col span={16} style={{marginTop:25}}>
            <ConditionBox/>
          </Col>
          <Col span={4}></Col>
        </Row>
        <Row>
          <Col span={3} ></Col>
          <Col span={14} style={{marginTop:25}}>
            <HouseImgBlock/>
          </Col>
          <Col span={5}></Col>
        </Row>
      </div>
    )
  }
}
