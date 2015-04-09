var fs     = require('fs')
var assert = require('assert')
var sinon  = require('sinon')
var main   = require('./')

describe('features', function() {
  beforeEach(function() {
    fs.writeFileSync('file.json', '{}')
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

  it('saves once', function(done) {
    var spy = sinon.spy(fs, 'writeFile')
    var obj = main('file.json')

    obj.a = 1
    obj.b = 2

    setTimeout(function() {
      assert(spy.calledOnce)
      done()
    }, 500)
  })

  it('returns the same object for the same file', function() {
    assert.equal(main('file.json'), main('file.json'))
  })
  afterEach(function() {
    fs.unlinkSync('file.json');
  })
})
