"use strict";
var desired = require('./desired');

describe(desired.browserName + " @android-arm-only", function () {
  require('../../common/webview/frames-base')(desired);
});
