#! /bin/sh

# npm install-g  browserbuild

rm -fr js 
mkdir js

cd js
cp ../../../node-xlsx/node_modules/node-zip/vendor/jszip/jszip*.js .

cp ../../lib/xlsx.js xlsx.js
browserbuild -g xlsx -m xlsx.js  xlsx.js > browser_xlsx.js
cd ..

