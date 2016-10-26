A simple template project for getting started with TDD and CI.
For starters I will be using Travis CI and Circle CI as build servers, showing some simple builds.
Just cause our Test are running smooth the build servers might still find javascript errors / invalid javascripts.
Eg : instead of a ;

Simple way of running the test and coverage:

* mocha tests --recursive --watch
* istanbul cover ./node_modules/mocha/bin/_mocha -- --recursive

This project uses:

CI:
* Circle CI
* Travis CI

Test:
* Mocha // Test framework https://mochajs.org
* Chai // Syntax / style
* Istanbul // Test coverage reports https://www.npmjs.com/package/istanbul


Roadmap:
* Add more CI services eg. Jenkins.
* Add dockerfile.
* Automatic deployments to Azure / AWS / Google App Engine.
* Create more realistic app with Express.

Have any great ideas for stuff this project could contain?
Just mail me at josh@topswagcode.com