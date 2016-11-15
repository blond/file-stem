const test = require('ava');

const stem = require('./index');

test('should parse absolute path', t => {
    t.is(stem('/path/to/file.js'), 'file');
});

test('should parse local path', t => {
    t.is(stem('./path/to/file.js'), 'file');
});

test('should parse basename', t => {
    t.is(stem('file.js'), 'file');
});

test('should parse path with complex extention', t => {
    t.is(stem('build.tar.gz'), 'build.tar');
});

test('should parse path with empty extention', t => {
    t.is(stem('file.'), 'file');
});

test('should parse path without extention', t => {
    t.is(stem('file'), 'file');
});

test('should parse path starts with dot', t => {
    t.is(stem('.file'), '.file');
});
