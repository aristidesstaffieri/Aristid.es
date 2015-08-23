import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

import Router from 'react-router'
const RouteHandler = Router.RouteHandler

class Body extends Component{

	render() {
		return (
			<div style={styles.container}>
				<div style={styles.postContainer}>
					<RouteHandler/>
				</div>
			</div>
		)
	}
}

const styles = {
	container: {
		width: '80%',
		height: '500px',
		display: 'inline-block',
		position: 'absolute',
		top: 0,
		right: 0
	},
	postContainer: {
		marginLeft: '10%'
	}
}

Body.displayName = 'Body'

export default Radium(Body)