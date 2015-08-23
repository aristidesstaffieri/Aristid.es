import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

class Nav extends Component{

	render() {
		return (
			<div style={styles.container}>
				<div style={styles.titleContainer}>
					<h1 style={styles.title}>Aristides</h1>
				</div>
				<div style={styles.descContainer}>
					<h5 style={styles.desc}>A blog about the web.</h5>
					<div style={styles.connectContainer}>
						<a href="#" style={styles.iconLink} key="a" ><i style={styles.socialIcon} className="fa fa-twitter" key="1"></i></a>
						<a href="#" style={styles.iconLink} key="b"><i style={styles.socialIcon} className="fa fa-instagram" key="2"></i></a>
						<a href="#" style={styles.iconLink} key="c"><i style={styles.socialIcon} className="fa fa-medium" key="3"></i></a>
						<a href="#" style={styles.iconLink} key="d"><i style={styles.lastIcon} className="fa fa-envelope-o" key="4"></i></a>
					</div>
				</div>
			</div>
		)
	}
}
const styles = {
	container: {
		width: '20%',
		position: 'absolute',
		top: 0,
		bottom: 0,
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
	},
	descContainer: {
		marginTop: '500px',
		textAlign: 'center',
	},
	desc: {
		fontFamily: 'Source Sans Pro',
		color: '#fff',
		fontSize: '1.3vw',
	},
	connectContainer: {
		textAlign: 'center',
		paddingLeft: '15%',
		paddingRight: '15%',
	},
	socialIcon: {
		color: '#fff',
		float: 'left',
		paddingRight: '20%',
		opacity: 0.5,

		state: [
			{ hover: {
				opacity: 1
			}}
		]
	},
	lastIcon: {
		paddingRight: '0',
		color: '#fff',
		float: 'left',
		opacity: 0.5,

		state: [
			{ hover: {
				opacity: 1
			}}
		]
	}
}

Nav.displayName = 'Navigation'

export default Radium(Nav)