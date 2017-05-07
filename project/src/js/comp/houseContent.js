import React from 'react';
import {Row, Col} from 'antd';
import ConditionBox from  './conditionBox'
import HouseImgBlock from './houseImgBlock'


export default class HouseContent extends React.Component {

  initState = () => ({
      searchCondition: {},
    }
  )

  constructor(props) {
    super(props)
    this.state = this.initState()
  }

  setInitState = () => {
    this.setState(this.initState())
  }

  setSearchCondition = (condition) => {
    this.setState({ searchCondition: condition })
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={4}></Col>
          <Col span={16} style={{marginTop:25}}>
            <ConditionBox  setSearchCondition={this.setSearchCondition}/>
          </Col>
          <Col span={4}></Col>
        </Row>
        <Row>
          <Col span={3} ></Col>
          <Col span={14} style={{marginTop:25}}>
            <HouseImgBlock searchCondition={this.state.searchCondition}/>
          </Col>
          <Col span={5}></Col>
        </Row>
      </div>
    )
  }
}
