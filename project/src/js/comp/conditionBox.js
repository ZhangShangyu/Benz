import React from 'react';


export default class ConditionBox extends React.Component{

  initState = () => ({
    }
  )

  constructor(props) {
    super(props)
    this.state = this.initState()
  }

  setInitState = () => {
    this.setState(this.initState())
  }

  render () {
    return (
      <div>
        <div>
          <li style={{display: 'inline'}}>a</li>
          <li style={{display: 'inline'}}>a</li>
          <li style={{display: 'inline'}}>a</li>
        </div>
        <div>
          <li style={{display: 'inline'}}>a</li>
          <li style={{display: 'inline'}}>a</li>
          <li style={{display: 'inline'}}>a</li>
        </div>
      </div>
    )
  }
}