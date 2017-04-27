import React from 'react';

export default class HouseRcmdTextBlock extends React.Component {
  render() {
    return (
      <div className="area-sub" style={{overflow: 'visible'}}>
        {/* product.html start */}
        <div id="layout-product" className="m-box ui-style-gradient mb12">
          <div
            id="js_changeView" className="box-bd clearfix"
            data-module-name="n_product">
            <div
              className="productlinks clearfix" style={{overflow: 'visible'}}>
              <div className="productlinks-item item-mail">
                <a href="http://qiye.163.com/">企业邮箱</a>
                <a href="http://mail.163.com/client/dl.html?from=mail46">邮箱大师</a>
                <a href="http://yixin.im" className="last">易信</a>
              </div>
              <div className="productlinks-item item-game item-recommend">
                <a href="http://zmq.163.com/">镇魔曲</a>
                <a href="http://9.163.com/">炉石传说</a>
                <a href="http://stzb.163.com/" className="last">率土之滨</a>
              </div>
              <div className="productlinks-item item-sns">
                <a href="http://photo.163.com/" className="pr0">相册</a>
                <a href="http://love.163.com/?from=wscp" className="pr0">花田</a>
                <a href="http://yuehui.163.com/?from=wscp" className="pr0">约会</a>
              </div>
              <div className="productlinks-item item-recommend">
                <a href="http://888.163.com/?from=tgnh2">1元购</a>
              </div>
              <div className="productlinks-item item-sns">
                <a href="http://blog.163.com/?fromService" className="pr0">博客</a>
                <a href="http://cc.163.com/" className="pr0">CC语音</a>
                <a href="http://www.bobo.com/" className="pr0">BoBo直播</a>
                <a href="http://y.163.com/download/index?from=wscp" className="pr0">美聊</a>
              </div>
              <div className="productlinks-item item-recommend">
                <a href="http://yxp.163.com/" className="pr0">印像派</a>
                <a href="http://open.163.com/" className="pr0">公开课</a>
                <a href="http://you.163.com?from=web_in_wyshouye" className="last">严选</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
