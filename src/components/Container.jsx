import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

import Nav from './Nav.jsx'
import Body from './Body.jsx'

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
    console.log('yo')
    this.setState({ addTransitionClass: 'transition' })
    setTimeout(() => this.setState({ addTransitionClass: '' }), 1000)
  }

  render(){
    return(
      <div style={style.container}>
        <Nav transitionClass={this.state.addTransitionClass}/>
        <Body clickHandler={this.clickHandler} articles={this.props.articles}/>
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
