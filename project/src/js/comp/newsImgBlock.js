import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';

export default class NewsImgBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      news: ''
    };
  }

  componentDidMount() {
     var myFetchOptions = {
      method: 'GET'
    };
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=' + this.props.type + '&count=' + this.props.count, myFetchOptions)
      .then(response => response.json())
      .then(json => this.setState({news: json}))
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    const styleImage = {
        display: 'block',
        width: this.props.imageWidth,
        height: this.props.imageHeight,
        float: 'left',
        padding: 10,
    };
    const styleHeader = {
        overflow: 'hidden',
        marginTop: 10,
        fontSize: 18,
    };
    const styleContent = {
      overflow: 'hidden',
      fontSize:14,
      marginBottom:20,
    }

    const news = this.state.news
    const newsList = news.length
      ? news.map((newsItem, index) => (
        <div key={index} >
          {/*<div className='imageblock'>*/}
            {/*<Link to={`details/${newsItem.uniquekey}`} target='_blank'>*/}
              {/*<img style={styleImage} src={newsItem.thumbnail_pic_s} />*/}
            {/*</Link>*/}
          {/*</div>*/}

          <Card>
            <img style={styleImage} src={newsItem.thumbnail_pic_s} />
            <div style={styleHeader}>
               <h3>{newsItem.title}</h3>
            </div>
            <div style={styleContent}>
               <p>{newsItem.author_name}</p>
            </div>
            <div>
              <em>类型：楼评</em>
              <em style={{paddingLeft:20}}>作者：楼评</em>
              <em style={{paddingLeft:20}}>2017-4-29</em>
            </div>
          </Card>
        </div>

      ))
      : '没有加载到任何新闻';

    return (
      <Card title={this.props.cardTitle} style={{width: this.props.width}} className='topNewsList'>
        {newsList}
      </Card>
    )
  }
}

