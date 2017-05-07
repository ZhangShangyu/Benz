import React from 'react'
import { Card, Cascader } from 'antd'

export default class ConditionBox extends React.Component{

  initState = () => ({
      regionClickedIndex: 0,
      priceClickedIndex: 0,
      areaClickedIndex: 0,
      typeClickedIndex: 0,
      decClickedIndex: 0,
      regionValue: 0,
      priceValue: 0,
      areaValue: 0,
      typeValue: 0,
      decValue: 0,
      subwayRouteValue: 0,
      subwayStationValue: 0,
    }
  )

  constructor(props) {
    super(props)
    this.state = this.initState()
  }

  setInitState = () => {
    this.setState(this.initState())
  }

  onConditionClick (value, index, type) {
    switch (type) {
      case 'region':
        this.setState({ regionClickedIndex: index, regionValue: value },
          () => this.setSearchCondition())
        break
      case 'price':
        this.setState({ priceClickedIndex: index, priceValue: value },
          () => this.setSearchCondition())
        break
      case 'area':
        this.setState({ areaClickedIndex: index, areaValue: value },
          () => this.setSearchCondition())
        break;
      case 'type':
        this.setState({ typeClickedIndex: index, typeValue: value },
          () => this.setSearchCondition())
        break
      case 'dec':
        this.setState({ decClickedIndex: index, decValue: value },
          () => this.setSearchCondition())
        break
      default:
        break
    }
  }

  onSubwaySelected = (value) => {
    this.setState({subwayRouteValue: value[0], subwayStationValue: value[1]},
      () => this.setSearchCondition())
  }

  setSearchCondition = () => {
    let condition = {}
    let {regionValue, priceValue, areaValue, typeValue,
      decValue, subwayRouteValue, subwayStationValue} = this.state
    regionValue !== 0 ? condition.region = regionValue : ''
    areaValue !== 0 ? condition.area = areaValue : ''
    priceValue !== 0 ? condition.price = priceValue : ''
    typeValue !== 0 ? condition.type = typeValue : ''
    decValue !== 0 ? condition.dec = decValue : ''
    subwayRouteValue !== 0 && subwayStationValue === 0 ? condition.route = subwayRouteValue : ''
    subwayStationValue !== 0 ? condition.station = subwayStationValue : ''
    this.props.setSearchCondition(condition)
  }

  getClickStyle = (index, type) => {
    let colorStyle = { color : 'grey'}
    let state = this.state
    let dict = {
      region:  state.regionClickedIndex,
      price: state.priceClickedIndex,
      area: state.areaClickedIndex,
      type: state.typeClickedIndex,
      dec: state.decClickedIndex,
    }
    if (index === dict[type]) {
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

    const regionOptions = [
      {value : 0, label: '不限'},
      {value : 1, label: '浦东'},
      {value : 2, label: '杨浦'},
      {value : 3, label: '黄埔'},
    ]

    const priceOptions = [
      {value : 0, label: '不限'},
      {value : '0-2000', label: '0-2000'},
      {value : '2000-4000', label: '2000-4000'},
      {value : '6000-8000', label: '6000-8000'},
    ]

    const areaOptions = [
      {value : 0, label: '不限'},
      {value : '0-30', label: '0-30'},
      {value : '30-60', label: '30-60'},
      {value : '60-120', label: '60-120'},
    ]

    const typeOptions = [
      {value : 0, label: '不限'},
      {value : 4, label: '两室'},
      {value : 5, label: '三室'},
      {value : 6, label: '一室'},
    ]

    const decOptions = [
      {value : 0, label: '不限'},
      {value : 7, label: '精装'},
      {value : 8, label: '简装'},
    ]

    const regionList = regionOptions.map((item, index) => (
        <span key={index}
            onClick={this.onConditionClick.bind(this, item.value, index, 'region')}>
          <a style={this.getClickStyle(index, 'region')}>{item.label}</a> &nbsp;&nbsp;
        </span>
      )
    )

    const priceList = priceOptions.map((item, index) => (
        <span key={index}
            onClick={this.onConditionClick.bind(this, item.value, index, 'price')}>
          <a style={this.getClickStyle(index, 'price')}>{item.label}</a> &nbsp;&nbsp;
        </span>
      )
    )

    const areaList = areaOptions.map((item, index) => (
        <span key={index}
            onClick={this.onConditionClick.bind(this, item.value, index, 'area')}>
          <a style={this.getClickStyle(index, 'area')}>{item.label}</a> &nbsp;&nbsp;
        </span>
      )
    )

    const typeList = typeOptions.map((item, index) => (
        <span key={index}
            onClick={this.onConditionClick.bind(this, item.value, index, 'type')}>
          <a style={this.getClickStyle(index, 'type')}>{item.label}</a> &nbsp;&nbsp;
        </span>
      )
    )

    const decList = decOptions.map((item, index) => (
        <span key={index}
            onClick={this.onConditionClick.bind(this, item.value, index, 'dec')}>
          <a style={this.getClickStyle(index, 'dec')}>{item.label}</a> &nbsp;&nbsp;
        </span>
      )
    )

    const subwayOptions = [{
        value: 9, label: '10号线',
        children: [
          {value: 0, label: '全线'},
          {value: 11, label: '同济大学'},
        ],
      }, {
        value: 10, label: '4号线',
        children: [
          {value: 0, label: '全线'},
          {value: 12, label: '临平路'},
        ],
      }
    ]

    return (
      <Card title="筛选条件">
      <div>
        <div style={styles.div}>
          <span style={styles.span}>区域：</span>
          {regionList}
        </div>
        <div style={styles.div}>
          <span style={styles.span}>售价：</span>
          {priceList}
        </div>
        <div style={styles.div}>
          <span style={styles.span}>面积：</span>
          {areaList}
        </div>
        <div style={styles.div}>
          <span style={styles.span}>房型：</span>
          {typeList}
        </div>
        <div style={styles.div}>
          <span style={styles.span}>装修：</span>
          {decList}
        </div>
        <div style={styles.div}>
          <span style={styles.span2}>地铁：</span>
          <Cascader options={subwayOptions} placeholder="不限" expandTrigger="hover" onChange={this.onSubwaySelected}/>
        </div>
      </div>
      </Card>
    )
  }
}