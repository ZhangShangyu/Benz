import React from 'react'
import { Card, Cascader } from 'antd'

export default class ConditionBox extends React.Component{

  initState = () => ({
      regionClickedIndex: 0
    }
  )

  constructor(props) {
    super(props)
    this.state = this.initState()
  }

  setInitState = () => {
    this.setState(this.initState())
  }

  onRegionClick (id, index) {
    console.log(id)
    this.setState({ regionClickedIndex: index })
  }

  getClickStyle = (index) => {
    let colorStyle = { color : 'grey'}
    if (index === this.state.regionClickedIndex) {
      colorStyle.color = 'blue'
    }
    return colorStyle
  }

  render () {
    const styles = {
      span: {
        marginRight: 15,
        color: '#999',
        verticalAlign: 'top'
      },
      div: {
        borderBottom: '1px dashed #d8d8d8',
        padding: 10,
      },
      span2: {
        marginRight: 15,
        color: '#999',
      },
    }

    const data = [
      {id : 1, label: '浦东'},
      {id : 2, label: '杨浦'},
      {id : 3, label: '黄埔'},
    ]

    const liList = data.map((item, index) => (
        <span key={index}
            onClick={this.onRegionClick.bind(this, item.id, index)}>
          <a style={this.getClickStyle(index)}>{item.label}</a> &nbsp;&nbsp;
        </span>
      )
    )

    const subwayOptions = [{
      value: '10', label: '十号线',
      children: [{
        value: 'tongji', label: '同济大学',
      }],
    }, {
      value: '4', label: '四号线',
      children: [{
        value: 'pudian', label: '浦电路',
      }],
    }]

    return (
      <Card title="筛选条件">
      <div>
        <div style={styles.div}>
          <span style={styles.span}>区域：</span>
          {liList}
        </div>
        <div style={styles.div}>
          <span style={styles.span}>售价：</span>
          {liList}
        </div>
        <div style={styles.div}>
          <span style={styles.span}>面积：</span>
          {liList}
        </div>
        <div style={styles.div}>
          <span style={styles.span}>房型：</span>
          {liList}
        </div>
        <div style={styles.div}>
          <span style={styles.span2}>地铁：</span>
          <Cascader options={subwayOptions} expandTrigger="hover"/>
        </div>
      </div>
      </Card>
    )
  }
}