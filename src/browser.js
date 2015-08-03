import React from 'react'
import App from '/components/app'

let mountNode = document.getElementById('react-main-mount')

/**
* React entry point
*/
React.render(new App({}), mountNode)
