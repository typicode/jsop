# jsop [![](https://travis-ci.org/typicode/jsop.svg?branch=master)](https://travis-ci.org/typicode/jsop) [![](https://img.shields.io/npm/v/jsop.svg?style=flat)](https://www.npmjs.com/package/jsop)  ![](http://img.shields.io/badge/node-0.11.13-ff69b4.svg?style=flat) ![](https://img.shields.io/badge/io.js-1.0.0-F5DA55.svg?style=flat)

> One-way data binding for JSON files

jsop is a new kind of JSON file reader/writer powered by Object.observe (requires Node 0.11.13 or io.js 1.0.0).

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

## License

MIT - [Typicode](https://github.com/typicode)

_* jsop is short for jsonOpen"_
