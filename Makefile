install:
	npm ci

test:
	npm test

run:
	node bin/weather.js __fixtures__/weather1.csv

run2:
	node bin/weather.js __fixtures__/weather2.csv

test-steps:
	npx jest --testNamePattern step1
	npx jest --testNamePattern step2
	npx jest --testNamePattern step3
	npx jest --testNamePattern step4
	npx jest --testNamePattern step5
