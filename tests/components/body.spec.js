import '../utils/dom.js'
import React from 'react/addons'
import { expect } from 'chai'
import sinon from 'sinon'

const TestUtils = React.addons.TestUtils

import createComponent  from '../utils/create-components'
import Body from '../../src/components/body.jsx'

describe('Nav component', () => {

	describe('renders with no passed in props', () => {
		const component = createComponent(Body)
		const rendered = TestUtils.renderIntoDocument(<Body />)

		it('should render a div that is 80% wide', () => {
			expect(component.props.style.width).to.equal('80%')
		})
	})
})