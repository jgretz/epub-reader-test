/* eslint-disable */
require('shelljs/global');

cd('api');
exec('yarn');

cd('../site')
exec('yarn');

cd('..');
exec('yarn build');

rm('-rf', 'api');
rm('-rf', 'site');

cp('-r', 'lib/', './');
rm('-rf', 'lib');

exec('npm install');