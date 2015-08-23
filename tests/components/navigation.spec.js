import '../utils/dom.js'
import React from 'react/addons'
import { expect } from 'chai'
import sinon from 'sinon'

const TestUtils = React.addons.TestUtils

import createComponent  from '../utils/create-components'
import Nav from '../../src/components/navigation.jsx'

describe('Nav component', () => {

	describe('renders with no passed in props', () => {
		const component = createComponent(Nav)
		const rendered = TestUtils.renderIntoDocument(<Nav />)

		it('should render a div that is 20% wide', () => {
			expect(component.props.style.width).to.equal('20%')
		})
	})
})