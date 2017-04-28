import React from 'react'
import {Row, Col, Card, Icon, Modal,
Tabs, Upload, Button, Input} from 'antd'

import MyEditor from './myEditor'


const TabPane = Tabs.TabPane;

export default class UserCenterContent extends React.Component {

  constructor() {
    super()

    this.state = {
      showUploadNews: false,
      previewImage: '',
      previewVisible: false,
      fileList: [
        {
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      ]
    }
  }

  componentDidMount() {

  }

  showUploadNews() {
    this.setState({ showUploadNews: true})
  }

  closeUploadNews() {
    this.setState({ showUploadNews: false})
  }

  handlePreview = (file) => {
    console.log(file);
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  }

  handleCancel = () => this.setState({previewVisible: false});

  handleChange = ({fileList,file}) => {
    if(file.status === 'done'){
      console.log(file);
    }
    this.setState({fileList: fileList});
  }

  render() {
    const styles = {
      paddingNum: {
        padding: 10,
      },
    }

    const props = {
      action: 'http://localhost:8080/news/upload',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      listType: 'picture-card'
    };

    const uploadButton = (
      <div>
        <Icon type='plus'/>
        <div className='ant-upload-text'>上传图片</div>
      </div>
    )

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
          <Col span={6}></Col>
          <Col span={6}>
            <Icon type="right" style={styles.paddingNum}/>标题:
            <Input  placeholder="请输入标题" />
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={6}>
            <Icon type="right" style={styles.paddingNum} />摘要:
            <Input type="textarea"  placeholder="请输入摘要" autosize={{ minRows: 2, maxRows: 6 }} />
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={6}>
            <Icon type="right" style={styles.paddingNum} />上传展示图片
            <div className='clearfix'>
                <Upload
                    {...props}
                    fileList={this.state.fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}>
                    {this.state.fileList.length >= 3
                      ? null
                      : uploadButton}
                  </Upload>
                  <Modal
                    visible={this.state.previewVisible}
                    footer={null}
                    onCancel={this.handleCancel}>
                    <img alt='预览' width='100%' src={this.state.previewImage}/>
                  </Modal>
            </div>
          </Col>
          <Col span={3}></Col>
        </Row>
         <Row>
          <Col span={6}></Col>
          <Col span={13}>
            <div style={{marginTop: 10}}>
              <MyEditor/>
            </div>
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={6}>
            <div style={styles.paddingNum}>
              <Button type="dashed">提交</Button>&nbsp;&nbsp;&nbsp;
              <Button type="dashed" onClick={this.closeUploadNews.bind(this)}>取消</Button>
            </div>
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
            { !this.state.showUploadNews &&
              <Button type="dashed" style={{fontWeight: 'bold', color: 'blue'}}
                      onClick={this.showUploadNews.bind(this)}>上传新闻</Button>
            }
          </Col>
        </Row>
        {contentRow}
      </div>
    )
  }
}
