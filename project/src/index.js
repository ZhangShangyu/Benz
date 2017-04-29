import React from 'react'
import ReactDOM from 'react-dom'
import Home from './js/container/Home'
import House from './js/container/House'
import UserCenter from './js/container/UserCenter'
import NewsDetail from './js/container/NewsDetail'
import { HashRouter as Router, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import './css/pc.css'

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path="/usercenter" component={UserCenter}/>
            <Route path="/house" component={House}/>
            <Route path="/news-detail/:id" component={NewsDetail}/>
          </div>
        </Router>
      </div>
    );
  };
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
