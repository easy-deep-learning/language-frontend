import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import {
  WordsPage
} from './pages'

const Pages = () => (
  <Router>
    <Route exact path="/words" component={WordsPage} />
  </Router>
)

export default Pages
