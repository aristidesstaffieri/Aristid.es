import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

import Nav from './Nav.jsx'
import ArticleList from './ArticleList.jsx'
import Article from './Article.jsx'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      addTransitionClass: ''
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  componentWillMount() {
    console.log(this.props.articles)
  }

  clickHandler() {
    this.setState({ addTransitionClass: 'transition' })
    setTimeout(() => this.setState({ addTransitionClass: '' }), 1000)
  }

  render(){
    const { props, state } = this
    return(
      <div style={style.container}>
        <Nav transitionClass={state.addTransitionClass}/>
        {
          props.isArticle
          ? <Article article={props.articles}/>
          : <ArticleList clickHandler={this.clickHandler} articles={props.articles} />
        }
      </div>
    )
  }
}
App.displayName = 'App Container'
App.defaultProps = {
  articles: []
}
const style = {
  container: {
    width: '100%',
    height: '100%'
  }
}
export default Radium(App)
