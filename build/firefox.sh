source build/version.sh

rm -r ../Builds/$version/Firefox
cp -r src ../Builds/$version/Firefox
mv ../Builds/$version/Firefox/manifest-firefox.json ../Builds/$version/Firefox/manifest.json
rm ../Builds/$version/Firefox/manifest-*

cd ../Builds/$version/Firefox
zip -r ../wordology-firefox-V$version.xpi .
rm -r *
mv ../wordology-firefox-V$version.xpi .