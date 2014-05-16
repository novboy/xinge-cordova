var exec = require("cordova/exec");
var xingeExports = {};

xingeExports.register = function (account,successCallback, errorCallback) {
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
xingeExports.configure = function (accessId,accessKey,debug,successCallback, errorCallback) {
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

xingeExports.onMessage = function (successCallback, errorCallback) {
    if (errorCallback == null) {
        errorCallback = function () {
        }
    }

    if (typeof successCallback != "function") {
        console.log("Xinge.onMessage failure: success callback parameter must be a function");
        return;
    }
	
    cordova.exec(successCallback, errorCallback, "Xinge", "onMessage", []);
};
xingeExports.notify = function (title,content,successCallback, errorCallback) {
    if (errorCallback == null) {
        errorCallback = function () {
        }
    }
	if (successCallback == null) {
        successCallback = function (data) {
			console.log("notify "+title+":"+data);
        }
    }
    cordova.exec(successCallback, errorCallback, "Xinge", "notify", [title,content]);
};
xingeExports.deleteTag = function (tag,successCallback, errorCallback) {
    if (errorCallback == null) {
        errorCallback = function () {
        }
    }
	if (successCallback == null) {
        successCallback = function (data) {
			console.log("delete tag "+tag+":"+data);
        }
    }
    cordova.exec(successCallback, errorCallback, "Xinge", "deleteTag", [tag]);
};
xingeExports.setTag = function (tag,successCallback, errorCallback) {
    if (errorCallback == null) {
        errorCallback = function () {
        }
    }
	if (successCallback == null) {
        successCallback = function (data) {
			console.log("add tag "+tag+":"+data);
        }
    }
    cordova.exec(successCallback, errorCallback, "Xinge", "setTag", [tag]);
};

xingeExports.onClick = function (successCallback, errorCallback) {
    if (errorCallback == null) {
        errorCallback = function () {
        }
    }
    if (typeof successCallback != "function") {
        console.log("Xinge.unregister failure: success callback parameter must be a function");
        return;
    }
    cordova.exec(successCallback, errorCallback, "Xinge", "onClick", []);
};

module.exports = xingeExports;