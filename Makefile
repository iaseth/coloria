
default: ts

prepare: license readme ts

ts:
	tsc

publish: prepare
	npm publish

readme:
	readmix --compile --markdown README.md.rx

license:
	readmix --compile --markdown LICENSE.md.rx

clean:
	@rm -rf dist
