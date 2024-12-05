#!/bin/sh -e

echo "-- Building www.julien-maze.com --"

yarn install
rm -rf dist
cp -R src dist
cp -R _layouts dist
cp _config.yml dist
rm -rf dist/scss
yarn build:css
