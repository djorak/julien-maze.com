#!/bin/sh -e

echo "-- Building www.julien-maze.com --"

npm i
npm run build:copy:fonts
npm run build:css
