import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

class Body extends Component{

	render() {
		return (
			<div style={styles.container}>
				
			</div>
		)
	}
}

const styles = {
	container: {
		width: '80%',
		height: '500px',
		display: 'inline-block',
	}
}

Body.propTypes = {

}

export default Radium(Body)