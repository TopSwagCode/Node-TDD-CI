# Node.js - Test Driven Development - Continuous Integration

Travis CI | Circle CI | Snap CI
--- | --- | ---|
[![Build Status](https://travis-ci.org/kiksen1987/Node-TDD-CI.svg?branch=master)](https://travis-ci.org/kiksen1987/Node-TDD-CI) | [![CircleCI](https://circleci.com/gh/kiksen1987/Node-TDD-CI.svg?style=svg)](https://circleci.com/gh/kiksen1987/Node-TDD-CI) | [![Build Status](https://snap-ci.com/kiksen1987/Node-TDD-CI/branch/master/build_image)](https://snap-ci.com/kiksen1987/Node-TDD-CI/branch/master)

A simple template project for getting started with TDD and CI.
This  template will be using a wide of Continuous Integration services and test frameworks. It's up to you, to decide which services / frameworks fits your needs. Eg. you might come from a .Net / Java background and used to use Assert's in unit tests. Then it would make sense to use that kind of syntax while writting tests. Same goes for CI services. You might like to have an YML file describing how the build should be run. Perhaps you like a graphic tool with stages.

I have created this template for mainly new Node developers, to get a quick overview of some of the most used and up to date options. While also includeing some base samples for getting it up and running. 

## Getting started

To get started simply install mocha and istanbul like so:

~~~
$ npm install --global mocha
$ npm install -g istanbul
$ npm install
~~~

Running all the tests in the tests folder and keep watching them for changes.
~~~ 
$ mocha tests --recursive --watch
~~~

Creating coverage report for all tests in the tests folder
~~~
$ istanbul cover ./node_modules/mocha/bin/_mocha -- tests --recursive
~~~

This project uses:

CI:
* Circle CI https://circleci.com/
* Travis CI https://travis-ci.org/ 
* Snap CI https://snap-ci.com/

Test:
* Mocha // Test framework https://mochajs.org
* Chai // Syntax / style http://chaijs.com/
* Istanbul // Test coverage reports https://www.npmjs.com/package/istanbul / https://istanbul.js.org/
* Looking into https://coveralls.io/ (Mostly just for the badge on github page.)

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