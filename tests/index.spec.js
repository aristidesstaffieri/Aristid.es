var test = require('tape')
var server = require('../dist/index.js')

test('basic test setup', function (assert) {
	assert.plan(2)
 	assert.equal(1 + 1, 1 + 1, 'Test passed!')
})