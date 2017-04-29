import React from 'react';
import {Row, Col, message} from 'antd';
import {NewsModel} from '../utils/dataModel'

export default class NewsDetailContent extends React.Component {

  constructor() {
    super();
    this.state = {
      newsContent: ''
    };
  }

  componentDidMount() {
    let param = {
      id: this.props.match.params.id,
    }
    NewsModel.getNewsDetail(param, (response) => {
      if (response.code === 200) {
        this.setState({ newsContent: response.data })
      } else {
        message.error("获取新闻详情失败")
      }
    }, (err) => {
      console.log(err)
    })

  }

  createMarkup() {
    return this.state.newsContent;
  }

  render() {
    return (
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
         <div style={{ marginTop: '10%' }}
              dangerouslySetInnerHTML={{
              __html: this.createMarkup()
            }}>
         </div>

        </Col>
        <Col span={2}></Col>
      </Row>
    )
  }
}
