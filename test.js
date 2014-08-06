var fs     = require('fs')
var assert = require('assert')
var main   = require('./')

describe('feature', function() {
  beforeEach(function() {
    if (fs.existsSync('file.json')) fs.unlinkSync('file.json')
  })

  it('autosaves', function(done) {
    var obj = main('file.json')
    assert.deepEqual(obj, {})

    obj.a = 1

    setTimeout(function() {
      assert.equal(
        fs.readFileSync('file.json').toString(),
        JSON.stringify(obj, null, 2)
      )
      done()
    }, 500)
  })

  it('returns the same object for the same file', function() {
    assert.equal(main('file.json'), main('file.json'))
  })
})