
## To run the tests

To run the tests against the apk that is already uploaded to TestObject just run the command below

```bash
$ npm install
$ npm run e2e
```
## What is this

I created this basic ionic dummy project, then added crosswalk to it, to reproduce and isolate the issues I'm having. These are the steps I took:

```bash
$ npm install -g ionic cordova
$ cordova platform add android
$ cordova plugin add cordova-plugin-crosswalk-webview
$ cordova build:prod
```

Then I uploaded the apk that is produced to TestObject.

I am using WebdriverIO as a testrunner, and the config file is `/Users/rtaylor/myApp/android_testobject.js`


