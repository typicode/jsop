var fs = require('fs')

// stores filename: object
var objects = {}

// used to debounce writing
var timeouts = {}

// deounced object writer (10 ms)
function writeObject(filename, object) {
  if (timeouts[filename]) clearTimeout(timeouts[filename])

  timeouts[filename] = setTimeout(function() {
    fs.writeFile(filename, JSON.stringify(object, null, 2), function(err) {
      if (err) throw err
    })
  }, 10)
}


module.exports = function(filename) {
  var object = objects[filename]

  // do not create a new object if it has already been created  
  if (object) {

    return object

  } else {

    // load object with file content if it exists
    if (fs.existsSync(filename)) {
      object = JSON.parse(fs.readFileSync(filename, { encoding: 'utf-8' }))
    } else {  
      object = {}
    }

    // write object when it changes
    if (Object.observe) {
      Object.observe(object, function() {
        writeObject(filename, object)
      })
    } else {
      // hack (should be removed when 0.12 is available)
      var objectString = JSON.stringify(object)
      setInterval(function() {
        if (objectString !== JSON.stringify(object)) {
          writeObject(filename, object)
          objectString = JSON.stringify(object)
        }
      }, 50)
    }

    // store object for filename and return it
    return objects[filename] = object
  }
}