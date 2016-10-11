import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

import GoodbyeWorld from '../containers/Goodbye'
import HelloWorld from '../containers/Hello'
import { Button } from 'react-toolbox/lib/button'

export default class App extends Component {
  render() {
    return (
      <div>
        <div><Link to={'/hello'}> What up? </Link></div>
        <div><Link to={'/goodbye'}> No thanks! </Link></div>
        <Button label='money'/>
        {this.props.children}
      </div>
    )
  }
}

