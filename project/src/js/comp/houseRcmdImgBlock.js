import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';

export default class HouseRcmdImgBlock extends React.Component {
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
        console.log(error);
      });
  }

  render() {
    const styleDiv = {
        width: '33%',
        height: '40%',
        float: 'left',
        padding: 8,
    };
    const styleH3 = {
        overflow: 'hidden',
    };
    const styleImg = {
      height:'100%',
      display:'block',
      width:'100%',
    }

    const news = this.state.news

    const newsList = news.length
      ? news.map((newsItem, index) => (
        <div key={index} style={styleDiv}>
            <Link to={`details/${newsItem.uniquekey}`} target='_blank'>
                <img style={styleImg} src={newsItem.thumbnail_pic_s} />
                <div>
                    <h3 style={styleH3}>{newsItem.title}</h3>
                    <p>{newsItem.author_name}</p>
                </div>
            </Link>
        </div>
      ))
      : '没有加载到任何新闻';

    return (
      <Card title={this.props.cardTitle} className='topNewsList'>
        {newsList}
      </Card>
    )
  }
}
