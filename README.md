A simple template project for getting started with TDD and CI.
For starters I will be using Travis CI and Circle CI as build servers, showing some simple builds.
Just cause our Test are running smooth the build servers might still find javascript errors / invalid javascripts.
Eg : instead of a ;


Simple way of running the test and coverage:

* mocha tests --recursive --watch
* istanbul cover ./node_modules/mocha/bin/_mocha -- --recursive

this will run all the tests and keep watch if anyfiles are changed. If so it will rerun the test for quick feedback loops.


This project uses:

CI:
* Circle CI
* Travis CI

Test:
* mocha // Test framework https://mochajs.org
* chai // Syntax / style
* istanbul // Test coverage reports https://www.npmjs.com/package/istanbul

