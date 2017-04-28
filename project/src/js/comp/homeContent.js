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
              <Col span={8}></Col>
              <Col span={8} style={{marginTop:25}}>
                <SearchBox/>
              </Col>
              <Col span={8}></Col>
            </Row>
            <Row>
              <Col span={5}></Col>
              <Col span={11} className='container'>
                <div >
                   <HouseRcmdImgBlock
                     count={6} type='guoji' cardTitle='房源推荐'/>
                </div>
               </Col>
              <Col span={1}></Col>
              <Col span={4}>
                <div>
                <Tabs className='tabs_product'>
                  <TabPane tab='优质房源' key='1'>
                    <HouseRcmdTextBlock/>
                  </TabPane>
                </Tabs>
                </div>
              </Col>
              <Col span={3}></Col>
           </Row>
            <Row>
              <Col span={4}></Col>
              <Col span={13} style={{paddingTop:25}}>
                <div style={{width:'100%',float:'left'}}>
                   <NewsImgBlock
                     type='guoji' cardTitle='新闻'/>
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
             <Col span={2}></Col>
           </Row>
          </div>
        )
    }
}