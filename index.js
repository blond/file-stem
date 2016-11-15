'use strict';

const path = require('path');

/**
 * Returns basename without extension.
 *
 * @param {String} filename — the path to file or directory.
 *
 * @returns {String}
 */
module.exports = (filename) => path.parse(filename).name;
