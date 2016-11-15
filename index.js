'use strict';

const path = require('path');

module.exports = (filename) => path.parse(filename).name;
