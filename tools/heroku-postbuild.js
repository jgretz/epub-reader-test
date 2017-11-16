/* eslint-disable */
require('shelljs/global');

exec('yarn build');

rm('-rf', 'api');
rm('-rf', 'site');

cp('-r', 'lib/', './');
rm('-rf', 'lib');

exec('npm install');