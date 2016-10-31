
echo "Pushing to docker"
docker push kiksen1987/nodetddci:latest

if [ ! -z $TRAVIS_TAG ]; then
    echo "Pushing to docker with tag $TRAVIS_TAG ..."
    docker tag kiksen1987/nodetddci kiksen1987/nodetddci:$TRAVIS_TAG
    docker push kiksen1987/nodetddci:$TRAVIS_TAG
fi