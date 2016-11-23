#!/bin/sh -e

echo "-- Building www.julien-maze.com --"

npm i
rm -rf dist
mkdir -p dist
cp -R node_modules/font-awesome/fonts dist
cp -R webapp/index.html dist
cp -R webapp/CNAME dist
cp -R webapp/files dist
npm run build:css
