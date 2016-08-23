#!/bin/sh -e

echo "-- Building www.julien-maze.com --"

npm i
npm run -s build:copy:fonts
npm run -s build:sass
#npm run -s build:postcss
