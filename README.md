file-stem
=========

[![NPM Status][npm-img]][npm]
[![Travis Status][test-img]][travis]
[![Windows Status][appveyor-img]][appveyor]
[![Coverage Status][coverage-img]][coveralls]

[npm]:          https://www.npmjs.org/package/file-stem
[npm-img]:      https://img.shields.io/npm/v/file-stem.svg

[travis]:       https://travis-ci.org/blond/file-stem
[test-img]:     https://img.shields.io/travis/blond/file-stem.svg?label=tests

[appveyor]:     https://ci.appveyor.com/project/blond/file-stem
[appveyor-img]: http://img.shields.io/appveyor/ci/blond/file-stem.svg?style=flat&label=windows

[coveralls]:    https://coveralls.io/r/blond/file-stem
[coverage-img]: https://img.shields.io/coveralls/blond/file-stem.svg

Filename without suffix.

Install
-------

```
$ npm install --save file-stem
```

Usage
-----

```js
const stem = require('file-stem');

stem('./lib/file.js'); // ➜ file
stem('index.html');    // ➜ index
stem('build.tar.gz');  // ➜ build.tar
```

API
---

### stem(path)

Returns filename without suffix.

### path

Type: `string`

The path to file or directory.

License
-------

MIT © [Andrew Abramov](https://github.com/blond)
