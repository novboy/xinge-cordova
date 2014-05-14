package org.apache.cordova.xinge;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import android.util.Log;

import com.tencent.android.tpush.XGIOperateCallback;
import com.tencent.android.tpush.XGPushConfig;
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
    	Log.d("TPush", "execute action"+action);
    	 if ("register".equals(action)) {
             //this.beep(args.getLong(0));
    		 String account = args.getString(0);
             return register(account,callbackContext);
         }else if("unregister".equals(action)) {
        	 return	unregister(callbackContext);
         }else if("configure".equals(action)) {
        	 Long accessId = args.getLong(0);
        	 String accessKey = args.getString(1);
        	 boolean debug = args.getBoolean(2);
        	 return	configure(accessId,accessKey,debug,callbackContext);
         }
         return false;  // Returning false results in a "MethodNotFound" error.
    }
    public boolean configure(Long accessId,String accessKey,boolean debug,final CallbackContext callbackContext) {
    	XGPushConfig.setAccessId(this.cordova.getActivity(), accessId);
    	XGPushConfig.setAccessKey(this.cordova.getActivity(), accessKey);
    	XGPushConfig.enableDebug(this.cordova.getActivity(), debug);
    	callbackContext.success();
    	return true;
    }
    public boolean register(String account,final CallbackContext callbackContext) {
    	XGPushManager.unregisterPush(this.cordova.getActivity());
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
    public boolean unregister(final CallbackContext callbackContext) {
    	XGPushManager.unregisterPush(this.cordova.getActivity());
    	callbackContext.success();
    	Log.d("TPush", "unregister push sucess");
    	return true;
    }

}
