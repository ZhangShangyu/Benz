import React from 'react';
import ReactDOM from 'react-dom';
import Home from './js/Home';
import House from './js/House'
import UserCenter from './js/comp/usercenter'
import { HashRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
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
