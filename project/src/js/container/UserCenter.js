import React, { Component } from 'react';
import Header from '../comp/header';
import UserCenterContent from '../comp/userCenterContent'
import Footer from '../comp/footer'

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <UserCenterContent/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
