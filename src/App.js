import React, { Component } from 'react'

import Router from './Router'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App-title">Welcome to Language</h1>
        </header>
        <div className="App__router"><Router /></div>
      </div>
    )
  }
}

export default App
