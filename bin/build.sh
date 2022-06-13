#!/bin/sh -e

echo "-- Building www.julien-maze.com --"

yarn install
rm -rf dist
cp -R src dist
cp -R node_modules/font-awesome/fonts dist
rm -rf dist/scss
yarn build:css
