import React from 'react'

import Router from 'react-router'
import routes from './routes'

let mountNode = document.getElementById('react-main-mount')

/**
* React entry point
*/
Router.run(routes, Router.HistoryLocation, (Handler) => {
	React.render(<Handler/>, mountNode)
})
