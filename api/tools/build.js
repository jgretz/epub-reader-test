/* eslint-disable */
require('shelljs/global');

echo('Building API ...');

// clean
rm('-rf', 'lib');

// convert
exec('babel -d lib/ src');
cp('-r', 'src/books/', 'lib/books')
