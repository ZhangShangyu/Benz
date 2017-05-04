import React from 'react'
import { Button, Row, Col, Input, Icon,
Checkbox, Cascader, Modal, message } from 'antd'
import { UserModel } from '../utils/dataModel'
import MyUpload from '../comp/myUpload'
const CheckboxGroup = Checkbox.Group

export default class HouseEditor extends React.Component {
  initState = () => ({
      uploadImgUrls: [],
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
    //this.setInitState()
    //TODO : 1 检查参数 2 发送新建房源数据 3 根据返回状态进行处理
  }

  closeUploadHouse = () => {
    this.setInitState()
    this.props.closeUploadHouse()
  }

  setInitState = () => {
    this.setState(this.initState())
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
    const options = [
      { label: '浦东', value: 'Apple' },
      { label: '杨浦', value: 'Pear' },
      { label: '黄埔', value: 'Orange' },
    ]

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
      <div>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>房源小区 &nbsp;&nbsp;
          <Input  placeholder="请输入房源小区" onChange={this.onTitleInput} style={{width: '50%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>价格 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Input  placeholder="请输入价格" onChange={this.onTitleInput} style={{width: '20%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>面积 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Input  placeholder="请输入面积(平方米)" onChange={this.onTitleInput} style={{width: '20%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>联系人姓名 &nbsp;&nbsp;
          <Input  placeholder="请输入联系人姓名" onChange={this.onTitleInput} style={{width: '20%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>联系人电话 &nbsp;&nbsp;
          <Input  placeholder="请输入联系人电话" onChange={this.onTitleInput} style={{width: '20%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum} />房源简介 &nbsp;&nbsp;
          <Input type="textarea"  placeholder="请输入房源简介" autosize={{ minRows: 2, maxRows: 6 }}
              style={{width: '50%'}} onChange={this.onAbstractInput}/>
        </Row>
        <Row>
            <Icon type="right" style={styles.paddingNum}/>区域 &nbsp;&nbsp;
            <div style={styles.marginNum}>
            <CheckboxGroup options={options} defaultValue={['Pear']} onChange={{}} />
            </div>
        </Row>
        <Row>
            <Icon type="right" style={styles.paddingNum}/>户型
            <div style={styles.marginNum}>
            <CheckboxGroup options={options} defaultValue={['Pear']} onChange={{}} />
            </div>
        </Row>
        <Row>
            <Icon type="right" style={styles.paddingNum}/>装修
            <div style={styles.marginNum}>
              <CheckboxGroup options={options} defaultValue={['Pear']} onChange={{}} />
            </div>
        </Row>
        <Row>
            <Icon type="right" style={styles.paddingNum}/>地铁 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Cascader options={subwayOptions} expandTrigger="hover" onChange={{}}/>
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
