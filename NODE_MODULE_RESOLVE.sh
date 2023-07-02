#!/bin/bash

# Specify the list of build.gradle files
buildGradleFiles=(
  "node_modules/react-native-os/android/build.gradle"
  "node_modules/react-native-tcp/android/build.gradle"
)

# Iterate over the files and replace the content using perl command
for buildGradleFile in "${buildGradleFiles[@]}"; do
  perl -i -pe "s/compile 'com\.facebook\.react:react-native:\+'/implementation 'com.facebook.react:react-native:+'/g" "$buildGradleFile"
  perl -i -pe "s/compile 'com\.koushikdutta\.async:androidasync:2\.1\.6'/implementation 'com\.koushikdutta\.async:androidasync:2\.1\.6'/g" "$buildGradleFile"
done

echo "//////////////////////////////////////////////"
echo "//////// NODE MODULE FILES REPLACED! /////////"
echo "//////////////////////////////////////////////"

