var exec = require("cordova/exec");
var Xinge = function(){};

Xinge.prototype.register = function (successCallback, errorCallback, account) {
    this.successCallback = successCallback;
    
    if (errorCallback == null) {
        errorCallback = function () {
        }
    }

    if (typeof successCallback != "function") {
        console.log("Push.register failure: onNotification callback parameter must be a function");
        return;
    }

    cordova.exec(successCallback, errorCallback, "Xinge", "registerPush", [account]);
};


Xinge.prototype.unregister = function (successCallback, errorCallback) {
    if (errorCallback == null) {
        errorCallback = function () {
        }
    }

    if (typeof successCallback != "function") {
        console.log("Push.unregister failure: success callback parameter must be a function");
        return;
    }

    cordova.exec(successCallback, errorCallback, "Xinge", "unregisterPush", []);
};

module.exports = new Xinge();