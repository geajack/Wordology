rm -r ../Builds/3/Firefox
cp -r src ../Builds/3/Firefox
mv ../Builds/3/Firefox/manifest-firefox.json ../Builds/3/Firefox/manifest.json
rm ../Builds/3/Firefox/manifest-*

cd ../Builds/3/Firefox
zip -r ../wordology-firefox-V3.xpi .
rm -r *
mv ../wordology-firefox-V3.xpi .