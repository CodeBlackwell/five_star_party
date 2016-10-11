import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'
import HelloWorld from './containers/Hello'
import GoodbyeWorld from './containers/Goodbye'

export default (
  <Route path='/' component={App}>
    <Route path='hello' component={HelloWorld} />
    <Route path='goodbye' component={GoodbyeWorld} />
  </Route>
)