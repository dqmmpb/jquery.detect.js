# jquery.detect.js OS&Browser&App检测插件

依赖[jQuery](http://jquery.com/)

## 安装
使用bower安装
```javascript
  bower install --save jquery.detect.js
```

## 使用
基本调用
```javascript
  $.detect;
```
or
```javascript
  $.detectFun();
```
返回值为JSON对象，格式如下
```javascript
  {
    os: os,  // OS信息
    browser: browser, // Browser信息
    app: app  // App信息
  };
```
### 默认支持以下几种App的检测
```text
  wechat 腾讯微信
  qq 腾讯QQ
  weibo 新浪微博
  uc UC浏览器
  alipay 支付宝
  taobao 淘宝
  dingtalk 钉钉
  xmdd 小马达达
```

### 同时也支持自定义的App正则表达式匹配，调用方式
```javascript
  var cusAppRegExp = {
    xmdd: /XMDD[\/]{0,1}([\d.]+)/i
  };
  
  $.detectFun(cusAppRegExp);
```


### 样例
```text
  AliApp(TB/5.11.0)
  AliApp(AP/9.9.2.083030)
  AliApp(DingTalk/2.15.0)
  UCBrowser/11.0.6.831
  XMDD/3.3.0
```
