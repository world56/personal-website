#!/bin/sh

if [ -d "./build" ]; then
  rm -rf ./build
fi

cp -r public .next/standalone/ 
cp -r .next/static .next/standalone/.next/ 

mv .next/standalone ./build
rm -rf ./.next
