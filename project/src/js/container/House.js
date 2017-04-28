import React, { Component } from 'react';
import Header from '../comp/header';
import HouseContent from '../comp/houseContent'
import Footer from '../comp/footer'

class House extends Component {
  render() {
    return (
      <div>
        <Header selected={'house'}/>
        <HouseContent/>
        <Footer/>
      </div>
    );
  }
}

export default House;
