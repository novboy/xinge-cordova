var exec = require("cordova/exec");
var xingeExports = {};

xingeExports.register = function (successCallback, errorCallback, account) {
    this.successCallback = successCallback;
    
    if (errorCallback == null) {
        errorCallback = function () {
        }
    }

    if (typeof successCallback != "function") {
        console.log("Xinge.register failure: onNotification callback parameter must be a function");
        return;
    }

    cordova.exec(successCallback, errorCallback, "Xinge", "register", [account]);
};


xingeExports.unregister = function (successCallback, errorCallback) {
    if (errorCallback == null) {
        errorCallback = function () {
        }
    }

    if (typeof successCallback != "function") {
        console.log("Xinge.unregister failure: success callback parameter must be a function");
        return;
    }

    cordova.exec(successCallback, errorCallback, "Xinge", "unregister", []);
};
xingeExports.configure = function (successCallback, errorCallback,accessId,accessKey,debug) {
    if (errorCallback == null) {
        errorCallback = function () {
        }
    }

    if (typeof successCallback != "function") {
        console.log("Xinge.unregister failure: success callback parameter must be a function");
        return;
    }
	
    cordova.exec(successCallback, errorCallback, "Xinge", "configure", [accessId,accessKey,debug]);
};

module.exports = xingeExports;