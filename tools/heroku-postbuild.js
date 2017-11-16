/* eslint-disable */
require('shelljs/global');

rm('-rf', 'api');
rm('-rf', 'site');

cp('-r', 'lib/', './');
rm('-rf', 'lib');

exec('npm install');