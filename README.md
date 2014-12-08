# jsop [![](https://badge.fury.io/js/jsop.svg)](http://badge.fury.io/js/jsop) [![](https://travis-ci.org/typicode/jsop.svg?branch=master)](https://travis-ci.org/typicode/jsop)

> One-way data binding for JSON files

jsop is a new kind of JSON file reader/writer powered by Object.observe (requires Node 0.11).

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

MIT - [Typicode](https://github.com/typicode)

_* jsop is short for JSON open_
