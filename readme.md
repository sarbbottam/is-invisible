is-invisible
---
Checks if a DOM element is truly invisible

[![Travis](https://img.shields.io/travis/sarbbottam/is-invisible.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/sarbbottam/is-invisible)
[![MIT License](https://img.shields.io/npm/l/watch-and-rsync.svg?maxAge=2592000&style=flat-square)](http://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?maxAge=2592000&style=flat-square)](http://makeapullrequest.com)

Display focus indicator for the active intractable element in a webpage.

## Acknowledgement

[true-visibility](https://github.com/UseAllFive/true-visibility) by [@jasonfarrell](https://github.com/jasonfarrell) is the origin of this module.

## Usage

```sh
npm i is-invisible --save
```

```js
const isInvisible = require('is-invisible');

// either
Element.protoType.isInvisible = function() {
  return isInvisible(this);
}

// or
isInvisible(node);
```

## Contributing

Please refer [Contributing guidelines](contributing.md) to enhance your contribution experience.
