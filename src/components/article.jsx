import React, { Component, PropTypes } from 'react'

class Article extends Component {
  constructor(props) {
		super(props)
	}

	render() {
		let {props} = this
		return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.date}</div>
        <div>{this.props.content}</div>
      </div>
		)
	}
}

Body.displayName = 'Article'
Body.defaultProps = {
  name: '',
  date: '',
  content: ''
}
Body.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string
}

export default Article
