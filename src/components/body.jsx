import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

class Body extends Component{

	render() {
		return (
			<div style={styles.container}>
				<div style={styles.postContainer}>
					<a href="#"><h1 style={styles.postTitle}>First Blog Post</h1></a>
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
	postTitle: {
		fontFamily: 'Source Sans Pro',
		fontSize: '3em',
		color: '#272727',
	},
	postContainer: {
		marginLeft: '10%'
	}
}

Body.displayName = 'Body'

export default Radium(Body)