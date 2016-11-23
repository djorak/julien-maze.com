#!/bin/sh -e

echo "-- Deploying www.julien-maze.com to Github pages --"

if [ "$TRAVIS" = "true" ]
then
    echo "-> Setting up git user"
    git config --global user.email "travis-ci@localhost"
    git config --global user.name "djorak"
fi

echo "-> Pushing /dist to Github pages"
ls -la ../node_modules
ls -la ./node_modules
ls -la .
ls -la ..
../node_modules/.bin/gh-pages --repo https://$GH_TOKEN@github.com/djorak/julien-maze.com.git
