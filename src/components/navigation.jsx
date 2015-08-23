import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

class Nav extends Component{

	render() {
		return (
			<div style={styles.container}>
				<div style={styles.titleContainer}>
					<h1 style={styles.title}>Aristides</h1>
				</div>
			</div>
		)
	}
}
const styles = {
	container: {
		width: '20%',
		position: 'absolute',
		top: '0',
		bottom: '0',
		display: 'inline-block',
		background: '#272727',
	},
	title: {
		fontFamily: 'Dancing Script',
		color: '#fff',
		fontSize: '4vw',
		textShadow: '0px 2px 1px #4d4d4d',
	},
	titleContainer: {
		textAlign: 'center',
	}
}

Nav.displayName = 'Navigation'

export default Radium(Nav)