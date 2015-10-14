import React, {PropTypes, Component} from 'react'

import Radium from 'radium'

class Body extends Component{
	constructor(props) {
		super(props)
	}

	render() {
		let {props} = this
		return (
			<div style={styles.container}>
				{
          this.props.articles.map((post, index) => <h1 style={styles.postTitle} onClick={props.clickHandler} key={index}>{ post.title }</h1>)
        }
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
	postDate: {
		fontSize: '0.8em',
		color: '#a3a3a3',
		fontStyle: 'italic',
		fontFamily: 'Helvetica',
		fontWeight: 100,
		marginTop: '-25px',

	}
}

Body.displayName = 'Body'
Body.defaultProps = {
  clickHandler: ''
}
Body.propTypes = {
  clickHandler: PropTypes.func.isRequired
}

export default Radium(Body)
