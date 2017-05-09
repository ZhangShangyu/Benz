import React from 'react'
import { Button, Row, Col, Input, Icon,
Radio, Cascader, Modal, message } from 'antd'
import { UserModel, HouseModel } from '../utils/dataModel'
import MyUpload from '../comp/myUpload'
const RadioGroup = Radio.Group

export default class HouseEditor extends React.Component {
  initState = () => ({
      uploadImgUrls: [],
      name: '',
      position: '',
      price: '',
      area: '',
      contact: '',
      phone: '',
      des: '',
      regionTagId: 0,
      typeTagId: 0,
      decTagId: 0,
      subwayRouteTagId: 0,
      subwayStationTagId: 0,
    }
  )

  constructor (props) {
    super(props)
    this.state = this.initState()
  }

  setUploadImgUrls = (url) => {
    let imgUrls = this.state.uploadImgUrls
    imgUrls.push(url)
    this.setState({uploadImgUrls: imgUrls})
  }

  submitUploadHouse = () => {
    if (this.checkParam()) {
      let param = this.wrapParam()
      console.log(JSON.stringify(param))
      HouseModel.saveHouse(param, (response) => {
        if (response.code === 200){
          message.success("上传成功")
          this.closeUploadHouse()
        }
      }, (err) => {
        console.log(err)
      })
    }
  }

  checkParam = () => {
    let state = this.state
    if (state.name === '' || state.position === ''
        || state.price === '' || state.area === ''
        || state.contact === '' || state.phone === ''
        || state.des === '' || state.regionTagId === 0
        || state.typeTagId === 0 || state.typeTagId === 0) {
      message.error("请填写完整")
      return false
    }
    return true
  }

  wrapParam = () => {
    let state = this.state
    let routeTag = state.subwayRouteTagId === undefined ? 0 : state.subwayRouteTagId
    let stationTag = state.subwayStationTagId === undefined ? 0 : state.subwayStationTagId
    let param = {
      name : state.name,
      position: state.position,
      price: state.price,
      area: state.area,
      contact: state.contact,
      phone: state.phone,
      des: state.des,
      cityId: 1,
      creatorName: UserModel.getUserInfo().username,
      imgUrls: state.uploadImgUrls,
      regionTag: state.regionTagId,
      typeTag: state.typeTagId,
      decTag: state.decTagId,
      routeTag,
      stationTag,
    }
    return param
  }

  closeUploadHouse = () => {
    this.setInitState()
    this.props.closeUploadHouse()
  }

  setInitState = () => {
    this.setState(this.initState())
  }

  onHouseNameInput = (e) => {
    this.setState({name: e.target.value})
  }

  onHouseDoorInput = (e) => {
    this.setState({position: e.target.value})
  }

  onPriceInput = (e) => {
    this.setState({price: e.target.value})
  }

  onAreaInput = (e) => {
    this.setState({area: e.target.value})
  }

  onContactInput = (e) => {
    this.setState({contact: e.target.value})
  }

  onPhoneInput = (e) => {
    this.setState({phone: e.target.value})
  }

  onDesInput = (e) => {
    this.setState({des: e.target.value})
  }

  onHouseNameInput = (e) => {
    this.setState({name: e.target.value})
  }

  onRegionChecked = (e) => {
    this.setState({regionTagId: e.target.value})
  }

  onTypeChecked = (e) => {
    this.setState({typeTagId: e.target.value})
  }

  onDecorationChecked = (e) => {
    this.setState({decTagId: e.target.value})
  }

  onSubwaySelected = (value) => {
    this.setState({subwayRouteTagId: value[0], subwayStationTagId: value[1]})
  }

  render () {
    const styles = {
      paddingNum: {
        padding: 20,
      },
      marginNum: {
        marginLeft: '10%'
      }
    }
    const regionOptions = [
      { label: '浦东', value: 1 },
      { label: '杨浦', value: 2 },
      { label: '黄埔', value: 3 },
    ]

    const typeOptions = [
      { label: '两室', value: 4 },
      { label: '三室', value: 5 },
      { label: '一室', value: 6 },
    ]

    const decOptions = [
      { label: '精装', value: 7 },
      { label: '简装', value: 8 },
    ]

    const subwayOptions = [{
      value: 9, label: '十号线',
      children: [{
        value: 11, label: '同济大学',
      }],
    }, {
      value: 10, label: '四号线',
      children: [{
        value: 12, label: '临平路',
      }],
    }]

    return (
      <div>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>房源小区 &nbsp;&nbsp;
          <Input  placeholder="请输入房源小区" onChange={this.onHouseNameInput} style={{width: '50%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>门牌信息 &nbsp;&nbsp;
          <Input  placeholder="请输入门牌信息" onChange={this.onHouseDoorInput} style={{width: '50%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>价格 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Input  placeholder="请输入价格" onChange={this.onPriceInput} style={{width: '20%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>面积 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Input  placeholder="请输入面积(平方米)" onChange={this.onAreaInput} style={{width: '20%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>联系人姓名 &nbsp;&nbsp;
          <Input  placeholder="请输入联系人姓名" onChange={this.onContactInput} style={{width: '20%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>联系人电话 &nbsp;&nbsp;
          <Input  placeholder="请输入联系人电话" onChange={this.onPhoneInput} style={{width: '20%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum} />房源简介 &nbsp;&nbsp;
          <Input type="textarea"  placeholder="请输入房源简介" autosize={{ minRows: 2, maxRows: 6 }}
              style={{width: '50%'}} onChange={this.onDesInput}/>
        </Row>
        <Row>
            <Icon type="right" style={styles.paddingNum}/>区域 &nbsp;&nbsp;
            <div style={styles.marginNum}>
            <RadioGroup options={regionOptions} onChange={this.onRegionChecked} />
            </div>
        </Row>
        <Row>
            <Icon type="right" style={styles.paddingNum}/>户型
            <div style={styles.marginNum}>
            <RadioGroup options={typeOptions} onChange={this.onTypeChecked} />
            </div>
        </Row>
        <Row>
            <Icon type="right" style={styles.paddingNum}/>装修
            <div style={styles.marginNum}>
              <RadioGroup options={decOptions}  onChange={this.onDecorationChecked} />
            </div>
        </Row>
        <Row>
            <Icon type="right" style={styles.paddingNum}/>地铁 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Cascader options={subwayOptions} expandTrigger="hover" onChange={this.onSubwaySelected}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum} />上传展示图片
          <div style={styles.marginNum}>
            <MyUpload setUploadImgUrls={this.setUploadImgUrls}/>
          </div>
        </Row>
        <Row>
          <div style={styles.paddingNum}>
            <Button type="dashed" onClick={this.submitUploadHouse}>提交</Button>&nbsp;&nbsp;&nbsp;
            <Button type="dashed" onClick={this.closeUploadHouse}>取消</Button>
          </div>
        </Row>
      </div>
     )
  }
}
