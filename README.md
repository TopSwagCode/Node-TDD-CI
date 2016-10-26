Travis CI:
[![Build Status](https://travis-ci.org/kiksen1987/Node-TDD-CI.svg?branch=master)](https://travis-ci.org/kiksen1987/Node-TDD-CI)

Circle CI:
[![CircleCI](https://circleci.com/gh/kiksen1987/Node-TDD-CI.svg?style=svg)](https://circleci.com/gh/kiksen1987/Node-TDD-CI)

Snap CI:
[![Build Status](https://snap-ci.com/kiksen1987/Node-TDD-CI/branch/master/build_image)](https://snap-ci.com/kiksen1987/Node-TDD-CI/branch/master)

A simple template project for getting started with TDD and CI.
For starters I will be using Travis CI and Circle CI as build servers, showing some simple builds.
Just cause our Test are running smooth the build servers might still find javascript errors / invalid javascripts.
Eg : instead of a ;

Running all the tests in tests folder and keep watching them 
* mocha tests --recursive --watch

Creating coverage report for all tests in tests folder
* istanbul cover ./node_modules/mocha/bin/_mocha -- tests --recursive

This project uses:

CI:
* Circle CI
* Travis CI
* Snap CI

Test:
* Mocha // Test framework https://mochajs.org
* Chai // Syntax / style
* Istanbul // Test coverage reports https://www.npmjs.com/package/istanbul / https://istanbul.js.org/
* Looking into https://coveralls.io/


Getting started:
* npm install --global mocha
* npm install -g istanbul
* npm install

You could offcourse add these to your own project.

Roadmap:
* Add more CI services eg. Jenkins, https://dockbit.com/
* Add dockerfile.
* Automatic deployments to Azure / AWS / Google App Engine.
* Create more realistic app with Express.

Have any great ideas for stuff this project could contain?
Just mail me at josh@topswagcode.com
Until next time, stay swag!


Extra swag:
gifs created using: http://screentogif.codeplex.com/
All code written in: https://code.visualstudio.com/ 