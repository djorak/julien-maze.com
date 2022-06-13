#!/bin/sh -e

echo "-- Building www.julien-maze.com --"

yarn install
rm -rf dist
mkdir -p dist
cp -R node_modules/font-awesome/fonts dist
cp -R src/index.html dist
cp -R src/CNAME dist
cp -R src/files dist
yarn build:css
