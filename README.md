# jsop

## Usage

```javascript
// file.json
{
  "a": 1
}
```

```javascript
// index.js
var jsop = require('jsop');
var obj  = jsop('file.json');

obj.a = 2
```

```bash
$ node index.js
```

```javascript
// file.json
{
  "a": 2
}
```