import React from 'react'
import {Row, Col, Tabs} from 'antd'
import HouseRcmdImgBlock from './houseRcmdImgBlock'
import HouseRcmdTextBlock from './houseRcmdTextBlock'
import SearchBox from './searchBox'
import NewsImgBlock from './newsImgBlock'

const TabPane = Tabs.TabPane

export default class HomeContent extends React.Component {

    render() {
        return (
          <div>
            <Row>
              <Col span={3}></Col>
              <Col span={20} className='search-container'>
                <SearchBox/>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row>
              <Col span={5}></Col>
              <Col span={10} className='container'>
                <div className="leftContainer">
                   <HouseRcmdImgBlock
                     count={6} type='guoji' cardTitle='房源推荐'/>
                </div>
               </Col>
              <Col span={1}></Col>
              <Col span={3}>
                <div>
                <Tabs className='tabs_product'>
                  <TabPane tab='优质房源' key='1'>
                    <HouseRcmdTextBlock/>
                  </TabPane>
                </Tabs>
                </div>
              </Col>
              <Col span={4}></Col>
           </Row>
            <Row>
              <Col span={4}></Col>
              <Col span={12} className='container'>
                <div className="leftContainer">
                   <NewsImgBlock
                      count={6} type='guoji'
                      width='100%' cardTitle='新闻'
                      imageWidth='200px' imageHeight="160px"/>
                </div>
              </Col>
              <Col span={1}></Col>
              <Col span={3}>
                <Tabs className='tabs_product'>
                  <TabPane tab='优质房源' key='1'>
                    <HouseRcmdTextBlock/>
                  </TabPane>
                </Tabs>
              </Col>
             <Col span={3}></Col>
           </Row>
          </div>
        )
    }
}