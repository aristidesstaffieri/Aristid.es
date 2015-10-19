import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class Article extends Component {
  constructor(props) {
		super(props)
	}

	render() {
		let { props } = this
		return (
      <div style={style.containerBody}>
        <div dangerouslySetInnerHTML={{__html: props.article}}></div>
      </div>
		)
	}
}

Article.displayName = 'Article'
Article.defaultProps = {
  name: '',
  date: '',
  content: ''
}
Article.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string
}

const style = {
  containerBody: {
	  width: '80%',
	  height: '500px',
	  display: 'inline-block',
	  position: 'absolute',
	  top: '0',
	  right: '0'
	},
	postTitle: {
	  fontFamily: 'Source Sans Pro',
		fontWeight: '900',
	  fontSize: '3em',
	  color: '#272727',
		cursor: 'pointer',
		marginLeft: '10%'
	}
}

export default Radium(Article)
