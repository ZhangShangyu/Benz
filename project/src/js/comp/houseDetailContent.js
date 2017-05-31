import React from 'react';
import {Row, Col, message, Carousel} from 'antd';
import {HouseModel, UserModel} from '../utils/dataModel'

export default class HouseDetailContent extends React.Component {

  constructor() {
    super();
    this.state = {
      houseContent: ''
    };
  }

  componentDidMount() {
    let param = {
      id: this.props.match.params.id,
    }
    HouseModel.getHouseDetail(param, (response) => {
      if (response.code === 200) {
        this.setState({ houseContent: response.data })
        console.log(JSON.stringify(response.data))
      } else {
        message.error("获取房源详情失败")
      }
    }, (err) => {
      console.log(err)
    })
    let userId = UserModel.getUserInfo().userId
    if (userId) {
      let countParam = {
        userId,
        houseId: this.props.match.params.id,
      }
      HouseModel.addBrowseCount(countParam, (response) => {
        // do nothing
      }, (err) => {
        console.log(err)
      })
    }

  }

  render() {
    const content = this.state.houseContent
    const imgList = content.imgUrls ? content.imgUrls : []

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      // effect: 'fade',
    };

    return (
      <div>
        <Row>
          <h1>{content.name}</h1>
          <span>{content.price}</span>
          <span>{content.type}</span>
          <span>{content.area}</span>
        </Row>
        <Row>
          { (imgList.length !== 0) &&
            (<Carousel {...settings}>
            {imgList.map((item, index) =>
              <div key={index}>
                <img src={item} ></img>
              </div>)}
            </Carousel>)
          }
        </Row>
      </div>
    )
  }
}