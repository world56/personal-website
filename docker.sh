#!/bin/sh
set -e

if [ ! -d "./builder" ]; then
  echo ""
  echo "The project has already been built."
  echo ""
else
  echo ""
  echo "Warning: Container initialization, ready for building."
  echo ""
  echo "Warning: If migrating to version v1.3.0 or higher, it is necessary to manually execute the SQL file."
  echo "https://github.com/world56/personal-website/blob/main/upgrade/post_type.sql"
  echo ""
  echo ""

  cd ./builder
  mkdir -p resource
  if [ -f ../resource/config.json ]; then
    cp ../resource/config.json ./resource
  fi

  npx prisma db push
  npm run build

  cp -r ./build/. ../

  cd ../
  rm -rf ./builder

fi
  exec "$@"
