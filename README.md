# Node.js - Test Driven Development - Continuous Integration

Travis CI | Circle CI | Snap CI | Coveralls
--- | --- | ---| --- |
[![Build Status](https://travis-ci.org/kiksen1987/Node-TDD-CI.svg?branch=master)](https://travis-ci.org/kiksen1987/Node-TDD-CI) | [![CircleCI](https://circleci.com/gh/kiksen1987/Node-TDD-CI.svg?style=svg)](https://circleci.com/gh/kiksen1987/Node-TDD-CI) | [![Build Status](https://snap-ci.com/kiksen1987/Node-TDD-CI/branch/master/build_image)](https://snap-ci.com/kiksen1987/Node-TDD-CI/branch/master) | [![Coverage Status](https://coveralls.io/repos/github/kiksen1987/Node-TDD-CI/badge.svg?branch=master)](https://coveralls.io/github/kiksen1987/Node-TDD-CI?branch=master)

A simple template project for getting started with Node.js, TDD and CI.
This  template will be using a wide of Continuous Integration services and test frameworks. It's up to you, to decide which services / frameworks fits your needs. Eg. you might come from a .Net / Java background and used to use Assert's in unit tests. Then it would make sense to use that kind of syntax while writting tests. Same goes for CI services. You might like to have an YML file describing how the build should be run. Perhaps you like a graphic tool with stages.

I have created this template for mainly new Node developers, to get a quick overview of some of the most used and up to date options. While also includeing some base samples for getting it up and running. This template will also help new developers how to structure code in Node.js  
This is by no means "This is the only way to structure code" template. Simply the way I choose to structure thing's.  

Further reading / discusions regarding Node.js Code structure:  
* http://stackoverflow.com/questions/5178334/folder-structure-for-a-node-js-project 
* https://gist.github.com/lancejpollard/1398757
* https://strongloop.com/strongblog/modular-node-js-express/
* Whatever you can find on google about this subject.

Furthermore this is not a guide of how to do Test Driven Development. Rather a template to enableing Test Driven Developemt. By showing how to continuously run test while writeing code or new tests. This template also contains a few different styles for writting tests. 

Well enough jibber jabber. Lets get started.

## Getting started

To get started and run example test code, simply install mocha and istanbul like so:

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

## Testing
We have seen now we can run tests, recursively while keeping watch on them. Now it's time to create some new tests. ChaiJS has 3 styles / flavours out of the box. These 3 are: Should, Expect and Assert. Pick whatever you like the best or whatever makes the most sense your project. For quick overview see the three examples below (Examples taken from ChaiJS own homepage). For more in depth examples goto tests folder and see examples I've made.

### Should
~~~javascript
chai.should();

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.length(3);
tea.should.have.property('flavors').with.length(3);
~~~

### Expect
~~~javascript
var expect = chai.expect;

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3);
expect(tea).to.have.property('flavors').with.length(3);
~~~

### Assert
~~~javascript
var assert = chai.assert;

assert.typeOf(foo, 'string');
assert.equal(foo, 'bar');
assert.lengthOf(foo, 3)
assert.property(tea, 'flavors');
assert.lengthOf(tea.flavors, 3);
~~~

## Continuous Integration

### Circle CI

Circle CI setup is minimal. It has great support for Node.js out of the box. Only thing needed to get tests up and running is installing the test dependencies. Circle CI uses package.json down install all dependencies. It can even be overwritten to install dev dependencies. It also has support for running Node.js tests, if these are described in the package.json. I was able to get Circle CI up and running within a few minutes. It also seems Circle CI has support for skipping YML file and just typing every command on their website. Didn't try out this feature.

My minimal setup for running on Circle CI was simply to create a circle.yml file and adding the following lines: 

~~~yml
machine:
  pre:
    - npm install --global mocha
    - npm install -g istanbul
~~~

### Travis CI

Travis is very similar to Circle CI. It also requires a YML file (.travis.yml) to get up and running. We have to specify in the YML we will be using Node.js and what version. Travis CI doesn't look at package.json. The result of this, is we have to have a few extra steps for installing dependencies and running tests. I simply added 3 statements in "install" part and added my test runner in "script" part. See my .travis.yml below: 

~~~yml
language: node_js

node_js:
  - "5"

sudo: true

env:
  - CI=true

install:
  - npm install --global mocha
  - npm install -g istanbul
  - npm install

script:
  - mocha tests --recursive
~~~

### Snap CI

Snap CI is unlike the two previous. It has only a graphical user interface. No YML nonesense. Simply create stages of commands, which will be your building steps. One cool feature is the options to add manual steps. I haven't tried this, but can see some opportunities. Eg. approving deployments to live setup and other cool stuff. 

# Project content

CI
* Circle CI https://circleci.com/
* Travis CI https://travis-ci.org/ 
* Snap CI https://snap-ci.com/

Test
* Mocha // Test framework https://mochajs.org
* Chai // Syntax / style http://chaijs.com/
* Istanbul // Test coverage reports https://www.npmjs.com/package/istanbul / https://istanbul.js.org/
* coveralls.io // Online test coverage reports. https://coveralls.io/

# Roadmap
* Add more CI services eg. Jenkins, https://dockbit.com/
* Add dockerfile.
* Automatic deployments to Azure / AWS / Google App Engine.
* Create more realistic app with Express.
* Add some images / gifs for showcasing project.
* One button deploy. (Eg. from other repo)

Have any great ideas for stuff this project could contain?  
Just mail me at josh@topswagcode.com  
Until next time, stay swag!

### Extra swag  
All code written in:  
https://code.visualstudio.com/ 