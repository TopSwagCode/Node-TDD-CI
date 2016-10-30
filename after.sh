
echo "Pushing to docker with tag $TRAVIS_TAG ..."
docker push kiksen1987/nodetddci:latest

docker tag kiksen1987/nodetddci kiksen1987/nodetddci:$TRAVIS_TAG
docker push kiksen1987/nodetddci:$TRAVIS_TAG