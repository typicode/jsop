var fs = require('fs')
var observed = require('observed')
var steno = require('steno')

var objects = {}

module.exports = function(filename) {
  if (objects[filename]) {
    return objects[filename]
  } else {
    if (!fs.existsSync(filename)) fs.writeFileSync(filename, '{}')
    var object = JSON.parse(fs.readFileSync(filename), { encoding: 'utf-8' })
    var ee = observed(object)
    ee.on('change', function() {
      steno(filename).write(JSON.stringify(object, null, 2))
    })
    objects[filename] = object
    return object
  }
}
