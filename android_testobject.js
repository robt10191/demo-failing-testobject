exports.config = {
    specs: [
        './test.spec.js'
    ],
    exclude: [],
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 9999999,
        expectationResultHandler: function (passed, assertion) {
        }
    },
    protocol: 'https',
    host: 'eu1.appium.testobject.com',
    port: 443,
    path: '/wd/hub',
    maxInstances: 10,
    capabilities: [{
        testobject_api_key: '1144F1AF14D3418E94071D324729CBE5',
        browserName: '',
        platformVersion: '7',
        platformName: 'Android',
        phoneOnly: false,
        tabletOnly: false,
        privateDevicesOnly: false,
        autoWebview: true,
        appiumVersion: '1.6.6-beta3'
    }],
    bail: 0,
    waitforTimeout: 30000,
    connectionRetryTimeout: 10 * 60000,
    connectionRetryCount: 3
};