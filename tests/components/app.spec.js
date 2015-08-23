import '../utils/dom.js'
import React from 'react/addons'
import { expect } from 'chai'
import sinon from 'sinon'

const TestUtils = React.addons.TestUtils

import createComponent  from '../utils/create-components'
import App from '../../src/components/app.jsx'

describe('App component', () => {

	describe('renders with no passed in props', () => {
		const component = createComponent(App)
		const rendered = TestUtils.renderIntoDocument(<App />)

		it('should render at 100% width/height', () => {
			expect(component.props.style.width).to.equal('100%')
			expect(component.props.style.height).to.equal('100%')
		})
	})
})

