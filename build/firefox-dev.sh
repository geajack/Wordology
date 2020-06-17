source build/version.sh

mkdir -p ../Builds/$version/Development
rm -r ../Builds/$version/Development
cp -r src ../Builds/$version/Development
mv ../Builds/$version/Development/manifest-firefox-dev.json ../Builds/$version/Development/manifest.json
rm ../Builds/$version/Development/manifest-*