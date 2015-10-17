import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/Container.jsx'

ReactDOM.render(<App articles={window.articles}/>, document.getElementById('app-entry'))
