# xinge-cordova `Android Only`

=============

## Cordova Android plugin for  Tencent Xinge 3.1.2

    1. Register  Tencent XinGe service.

        http://xg.qq.com/xg/apps/ctr_app/reg

    2. Install plugin

        cordova plugin add https://github.com/zhihuwang/xinge-cordova.git  --variable XG_V2_ACCESS_ID=[access id from tencent] --variable XG_V2_ACCESS_KEY=[access KEY from tencent]

    3.ͨ Invoke via javascript

## API of Xinge.js

configure: `建议不要在js里面来注册,安装plugin指定即可`

    window['Xinge'].configure( accessId, accessKey,debug,
            function(data) {
              console.log("configure success:" + data);
            }, function(data) {
              console.log("configure failed:" + data);
            });
   
register:

    window['Xinge'].register(userid,function(token){},function(data){console.log("error:"+data)});

unregister:

    window['Xinge'].unregister(function(data){console.log("success:"+data)},function(data){console.log("error:"+data)}, userid);

