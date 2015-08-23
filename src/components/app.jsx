import React, {PropTypes, Component} from 'react'
import Radium from 'radium'
import Nav from './navigation'
import Body from './body'

class App extends Component{

	render() {
		return (
			<div style={styles.container}>
				<Nav />
				<Body />
			</div>
		)
	}
}

const styles = {
	container: {
		width: '100%',
		height: '100%',
	}
}

export default Radium(App)