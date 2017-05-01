import React from 'react'
import { Button } from 'antd'

export default class HouseEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorHtml: '' }
  }


  render () {
    return (
      <div>
        <Button type="dashed" onClick={this.props.closeUploadHouse}>取消</Button>
      </div>
     )
  }
}
