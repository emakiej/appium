"use strict";

var Android = require('./android.js')
  , Selendroid = require('./selendroid.js')
  , _ = require('underscore')
  , androidCommon = require('./android-common.js')
  , logger = require('../../server/logger.js').get('appium')
  ;


var Opera = function (desiredCaps) {

  if (desiredCaps.automationName.indexOf('selendroid') !== -1) {
    _.extend(Opera.prototype, Selendroid.prototype);
    Opera.prototype._setAndroidArgs = Selendroid.setAndroidArgs;
  }
  else {
    _.extend(Opera.prototype, Android.prototype);
    Opera.prototype._setAndroidArgs = androidCommon.setAndroidArgs;
  }


  Opera.prototype.setAndroidArgs = function () {
    this._setAndroidArgs();
  
    this.args.androidDeviceSocket = 'opera_beta_devtools_remote';
    this.args.chromedriverExecutable = 'D:\\ELA\\Praca\\Opera\\webdriver\\operadriver.exe';
  };

  this.init();
  
};

module.exports = Opera;

