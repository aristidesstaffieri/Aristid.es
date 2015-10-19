import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

class ArticleList extends Component {
  constructor(props) {
		super(props)
	}

  handleClick(post) {
    console.log(post)
    window.location.href  =`http://localhost:3000/${post.id}`
  }

  render() {
    const { props } = this
    return (
        <div style={style.containerBody}>
          {
            props.articles.map((post, index) => <h1 style={style.postTitle} onClick={this.handleClick.bind(this, post)} key={index}>{ post.title }</h1>)
          }
        </div>
    )
  }
}

ArticleList.displayName = 'Article List'
ArticleList.defaultProps = {
  articles: [],
  clickHandler: ''
}
ArticleList.propTypes = {
  articles: PropTypes.array,
  clickHandler: PropTypes.func.isRequired
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
	},
	postDate: {
	  fontSize: '0.8em',
	  color: '#a3a3a3',
	  fontStyle: 'italic',
	  fontFamily: 'Helvetica',
	  fontWeight: '100',
	  marginTop: '-25px'
	}
}

export default Radium(ArticleList)
