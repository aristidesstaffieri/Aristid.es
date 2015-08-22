require('./utils/dom.js')
var React = require('react/addons')
import { expect } from 'chai'
var sinon = require('sinon')

var TestUtils = React.addons.TestUtils

var createComponent = require('./utils/create-components')
var App = require('../src/components/app.jsx')

describe('App component', function() {

	describe('renders with no props passed in', function() {
		var component = createComponent(App, { name: 'Chris' })
		var rendered = TestUtils.renderIntoDocument(<App name={'Chris'}/>)

		it('should render with default props and state', function() {
			var returnThePropsSpy = sinon.spy(rendered, 'someOtherFunction')
			rendered.returnTheProps()

			expect(returnThePropsSpy.called).to.be.true
			returnThePropsSpy.reset()

		})
	})
})

