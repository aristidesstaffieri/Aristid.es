import React, {PropTypes as T} from 'react'

class App extends React.Component{
	returnTheProps(val) {
		this.someOtherFunction(val)
	}

	someOtherFunction(val) {
		return val
	}

	render() {
		return (
			<div>
				hi! {this.props.name}
			</div>
		)
	}
}

App.propTypes = {
	name: T.string.isRequired
}

export default App