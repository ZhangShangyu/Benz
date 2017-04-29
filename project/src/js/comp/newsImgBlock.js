import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
import { NewsModel } from '../utils/dataModel'

export default class NewsImgBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      news: ''
    };
  }

  componentDidMount() {
    NewsModel.getNews(null, (data) => {
      if (data.code == 200) {
        this.setState( { news: data.data })
      }
    }, (err) => {
      console.log(err)
    })
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
        overflow: 'hidden',
        marginTop: 10,
        fontSize: 18,
      },
      content: {
        overflow: 'hidden',
        fontSize:14,
        marginBottom:20,
      },
    }


    const news = this.state.news
    const newsList = news.length
      ? news.map((newsItem, index) => {
      return (index < 6) &&
        (<Link to={`news-detail/${newsItem.id}`} target='_blank' style={{ color: 'gray' }}>
            <Card>
              <img style={styles.image} src={newsItem.titlePic}/>
              <div style={styles.header}>
                <h3>{newsItem.title}</h3>
              </div>
              <div style={styles.content}>
                <p>{newsItem.newsAbstract}</p>
              </div>
              <div>
                <em>类型：楼评</em>
                <em style={{padding: 20}}>作者：{newsItem.creatorId}</em>
                <em style={{padding: 20}}>{newsItem.createTime}</em>
              </div>
            </Card>
          </Link>
        )
      })
      : '没有加载到任何新闻';

    return (
      <Card title={this.props.cardTitle} style={{marginBottom: 15}}>
        {newsList}
      </Card>
    )
  }
}

