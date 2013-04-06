#! /bin/sh

# npm install -g browserbuild

rm -fr js
mkdir js

cd js
cp ../../../node-xlsx/node_modules/node-zip/vendor/jszip/jszip*.js .
cp ../../../node-xlsx/node_modules/cli-table/lib/cli-table/index.js ./cli-table.js
cp ../../../node-xlsx/node_modules/cli-table/lib/cli-table/utils.js .
cp ../../../node-xlsx/node_modules/cli-table/node_modules/colors/colors.js .

cp ../js-save/* .

cp ../../lib/xlsx.js xlsx.js
browserbuild -g xlsx -m xlsx.js  xlsx.js > browser_xlsx.js
browserbuild -g Table -m cli-table.js cli-table.js utils.js colors.js > browser_cli-table.js
cd ..

