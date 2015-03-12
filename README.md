# jsop [![](https://travis-ci.org/typicode/jsop.svg?branch=master)](https://travis-ci.org/typicode/jsop) [![](https://badge.fury.io/js/jsop.svg)](https://www.npmjs.com/package/jsop)

> One-way data binding for JSON files

jsop is a __new__ kind of JSON file reader/writer for __Node 0.12__ and __io.js__ powered by Object.observe.

## Before

```javascript
var fs = require('fs')

var config = JSON.parse(fs.readFileSync('config.json'))
config.foo = 'bar'
fs.writeFile('config.json', JSON.stringify(config), function(err) {
  if (err) throw err
})
```

## After

```javascript
var jsop = require('jsop')

var config = jsop('config.json')
config.foo = 'bar'
```

_Changes are automatically written to file. If file doesn't exist, it will be created._

## License

MIT - [Typicode](https://github.com/typicode)

_* jsop is short for jsonOpen_
