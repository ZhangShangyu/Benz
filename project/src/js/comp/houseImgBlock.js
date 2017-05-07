import React from 'react';
import {Card, Spin, Tag} from 'antd';
import {Link} from 'react-router-dom';
import { NewsModel, HouseModel } from '../utils/dataModel'

export default class HouseImgBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      currentPageNum: 0,
      searchCondition: this.props.searchCondition
    };
  }

  componentDidMount() {
    this.getPageContent(null)
  }

  componentWillReceiveProps(nextProps) {
    let param = nextProps.searchCondition
    HouseModel.getHouseByCondition(param, (response) => {
      if (response.code === 200) {
        console.log(response.data)
      }
    }, (err) => {
      console.log(err)
    })
  }

  getPageContent = (param) => {
    NewsModel.getNews(param, (response) => {
      if (response.code == 200) {
        let currentPageNum = this.state.currentPageNum + 1;
        let news = this.state.news.concat(response.data)
        this.setState( { news, currentPageNum })
      }
    }, (err) => {
      console.log(err)
    })
  }

  getNextPageContent = () => {
    let param = {
      pageNum: this.state.currentPageNum + 1,
    }
    this.getPageContent(param)
  }

  render() {
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
        wordWrap:'break-word'
      },
      content: {
        fontSize:14,
        marginBottom:20,
        wordWrap:'break-word'
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

    const news = this.state.news

    const newsList = news.length
      ? news.map((newsItem, index) => (
        <div key={index}>
        <Link to={`news-detail/${newsItem.id}`} target='_blank' style={{ color: 'gray' }}>
            <Card>
              <img style={styles.image} src={newsItem.titlePic}/>
              <div style={styles.header}>
                <h3>{newsItem.title}</h3>
              </div>
              <div style={styles.content}>
                <p>{newsItem.newsAbstract}</p>
              </div>
              <div style={{textAlign: 'right'}}>
                <span style={{color: 'red', padding:10}}>
                  <strong style={{fontSize: 22}}>6000</strong>元
                </span>
              </div>
              <div style={{}}>
                <Tag>blue</Tag>
                <Tag>作者：{newsItem.creatorId}</Tag>
                <Tag>{newsItem.createTime}</Tag>
              </div>
            </Card>
        </Link>
        </div>
        ))
      : (<Spin tip="Loading..."/>)

    const loadAnother = news.length
      ? (<div style={styles.loadAnother} onClick={this.getNextPageContent}>加载更多</div>)
      : ''

    return (
      <div>
      <Card title="房源信息" style={{marginBottom: 15}}>
        {newsList}
        {loadAnother}
      </Card>
      </div>
    )
  }
}
