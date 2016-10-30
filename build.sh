#!/bin/bash
touch version.json
echo "{ \"version\" : \"$TRAVIS_JOB_NUMBER\" }" > version.json
docker login -e="$DOCKER_EMAIL" -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD"
docker build -t kiksen1987/nodetddci .