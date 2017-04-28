import React from 'react'
import {Row, Col, Card, Icon, Modal, Tabs, Upload,Button} from 'antd'
import MyEditor from './myEditor'


const TabPane = Tabs.TabPane;

export default class UserCenterContent extends React.Component {

  constructor() {
    super()

    this.state = {
      showUploadNews: false,
    }
  }

  componentDidMount() {

  }

  showUploadNew() {
    this.setState({ showUploadNews: true})
  }


  render() {

    const listRow = (
      <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Tabs style={{padding:40}}>
              <TabPane tab=' 我的收藏列表' key='1'>
              </TabPane>
              <TabPane tab='我的评论列表' key='2'>
              </TabPane>
              <TabPane tab='头像设置' key='3'>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
      </Row>
    )

    const newsEditorRow = (
      <div style={{marginTop:'3%'}}>
        <Row>
          <Col span={3}></Col>
          <Col span={20}>
            标题
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={3}></Col>
          <Col span={20}>
            摘要
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={3}></Col>
          <Col span={20}>
            上传展示图片
          </Col>
          <Col span={3}></Col>
        </Row>
         <Row>
          <Col span={3}></Col>
          <Col span={20}>
            <MyEditor/>
          </Col>
          <Col span={3}></Col>
        </Row>
      </div>
    )

    const contentRow = this.state.showUploadNews ? newsEditorRow : listRow

    return (
      <div>
        <Row>
          <Col span={3}></Col>
          <Col span={20} style={{marginTop:'3%'}}>
            <Button type="dashed" style={{ fontWeight: 'bold', color:'blue'}}
              onClick={this.showUploadNew.bind(this)}>上传新闻</Button>
          </Col>
        </Row>
        {contentRow}
      </div>
    )
  }
}
