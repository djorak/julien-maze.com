#!/bin/sh -e

echo "-- Deploying www.julien-maze.com to Github pages --"

if [ "$TRAVIS" = "true" ]
then
    echo "-> Setting up git user"
    git config --global user.email "travis-ci@localhost"
    git config --global user.name "djorak"
fi

echo "-> Pushing /dist to Github pages"
./node_modules/.bin/gh-pages \
    --dir dist \
    --repo https://$GH_TOKEN@github.com/djorak/julien-maze.com.git
