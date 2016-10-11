import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { Button } from 'react-toolbox/lib/button';

import GoodbyeWorld from '../containers/Goodbye'
import HelloWorld from '../containers/Hello'

export default class App extends Component {
  render() {
    return (
      <div>
        <div><Link to={'/hello'}> What up? </Link></div>
        <div><Link to={'/goodbye'}> No thanks! </Link></div>
        <Button label='Whatup' />
        {this.props.children}
      </div>
    )
  }
}

