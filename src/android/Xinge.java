package org.apache.cordova.xinge;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import android.util.Log;

import com.tencent.android.tpush.XGIOperateCallback;
import com.tencent.android.tpush.XGPushManager;

public class Xinge extends CordovaPlugin {
	/**
     * Executes the request and returns PluginResult.
     *
     * @param action            The action to execute.
     * @param args              JSONArry of arguments for the plugin.
     * @param callbackContext   The callback id used when calling back into JavaScript.
     * @return                  A PluginResult object with a status and message.
     */
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    	 if ("registerPush".equals(action)) {
             //this.beep(args.getLong(0));
    		 String account = args.getString(0);
             return registerPush(account,callbackContext);
         }else if("unregisterPush".equals(action)) {
        	 return	unregisterPush(callbackContext);
         }
         return false;  // Returning false results in a "MethodNotFound" error.
    }
    public boolean registerPush(String account,final CallbackContext callbackContext) {
    	XGPushManager.registerPush(this.cordova.getActivity(), account,
    			new XGIOperateCallback() {
    				@Override
    				public void onSuccess(Object data, int flag) {
    					Log.d("TPush", "register sucess:device token is:" + data);
    					callbackContext.success("{success:true,data:'"+data+"'}");
    				}
    				@Override
    				public void onFail(Object data, int errCode, String msg) {
    					Log.d("TPush", "register failed,error code:" + errCode + ",error msg:" + msg);
    					callbackContext.error("{success:false,errCode:'"+errCode+"',msg:'"+msg+"'}");
    				}
    			});
    	return true;
    }
    public boolean unregisterPush(final CallbackContext callbackContext) {
    	XGPushManager.unregisterPush(this.cordova.getActivity());
    	callbackContext.success();
    	Log.d("TPush", "unregister push sucess");
    	return true;
    }

}
