import React from 'react';
import {Card, Spin, Tag} from 'antd';
import {Link} from 'react-router-dom';
import {HouseModel} from '../utils/dataModel'

export default class HouseImgBlock extends React.Component {

  initState = () => ({
      houses: [],
      currentPageNum: 0,
    }
  )

  constructor(props) {
    super(props);
    this.state = this.initState()
  }

  componentDidMount() {
    let param = this.props.searchCondition
    this.getPageContent(param)
  }

  componentWillReceiveProps(nextProps) {
    let param = nextProps.searchCondition
    let searchKey = nextProps.searchKey
    if (searchKey !== "") {
      param.searchKey = searchKey
    }
    this.getPageContent(param, true)
  }

  getPageContent = (param, isFromPropUp) => {
    param.saleType = this.props.searchType
    HouseModel.getHouseByCondition(param, (response) => {
      if (response.code === 200) {
        let currentPageNum
        let houses
        if (isFromPropUp) {
          currentPageNum = 1
          houses = response.data
        } else {
          currentPageNum = this.state.currentPageNum + 1;
          houses = this.state.houses.concat(response.data)
        }
        this.setState({houses, currentPageNum})
      }
    }, (err) => {
      console.log(err)
    })
  }

  getNextPageContent = () => {
    let param = this.props.searchCondition
    param.pageNum = this.state.currentPageNum + 1
    let searchKey = this.props.searchKey
    if (searchKey !== "") {
      param.searchKey = searchKey
    }
    this.getPageContent(param)
  }

  render() {
    const unit = this.props.searchType === '1' ? '万元' : '元'

    const styles = {
      image: {
        display: 'block',
        width: '25%',
        height: '100%',
        float: 'left',
        padding: 8,
      },
      header: {
        marginTop: 10,
        fontSize: 18,
        wordWrap: 'break-word'
      },
      content: {
        fontSize: 14,
        marginBottom: 20,
        wordWrap: 'break-word'
      },
      loadAnother: {
        textAlign: 'center',
        background: 'rgba(0,0,0,0.05)',
        borderRadius: 4,
        padding: '10px 30px',
        margin: '10px 0',
        fontSize: 20,
      }
    }

    const houses = this.state.houses

    const houseList = houses.length
      ? houses.map((houseItem, index) => (
        <div key={index}>
          <Link to={`house-detail/${houseItem.houseId}`} target='_blank' style={{color: 'gray'}}>
            <Card>
              <img style={styles.image} src={houseItem.headImg}/>
              <div style={styles.header}>
                <h3>{houseItem.name}</h3>
              </div>
              <div style={styles.content}>
                <p>{houseItem.des}</p>
              </div>
              <div style={{textAlign: 'right'}}>
                <span style={{color: 'red', padding: 10}}>
                  <strong style={{fontSize: 22}}>{houseItem.price}</strong>{unit}
                </span>
              </div>
              <div style={{}}>
                { houseItem.tagNames.map((tagItem, index) => (
                  <Tag key={index}>{tagItem}</Tag>
                ))
                }
              </div>
            </Card>
          </Link>
        </div>
      ))
      : (<Spin tip="抱歉，没有符合条件的结果..."/>)

    const loadAnother = houses.length
      ? (<div style={styles.loadAnother} onClick={this.getNextPageContent}>加载更多</div>)
      : ''

    return (
      <div>
        <Card title="房源信息" style={{marginBottom: 15}}>
          {houseList}
          {loadAnother}
        </Card>
      </div>
    )
  }
}
