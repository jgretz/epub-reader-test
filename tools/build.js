/* eslint-disable */
require('shelljs/global');

rm('-rf', 'lib/');

// api
cd('api');
exec('yarn build');

cp('-r', 'lib/', '../lib');
rm('-rf', 'lib/');
cd('..')

// site
echo('Building Site');
cd('site');
exec('yarn build');

cp('-r', 'dist/', '../lib/site');
rm('-rf', 'dist/');
cd('..')

// package.json
var fs = require('fs');
var apiPackage = JSON.parse(fs.readFileSync('./api/package.json', 'utf8'));

var package = {
  name: 'epub-test',
  main: 'index.js',
  scripts: {
    start: 'node index.js',
  },
  dependencies: apiPackage.dependencies,
};

fs.writeFileSync('lib/package.json', JSON.stringify(package));