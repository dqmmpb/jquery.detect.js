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
  xmddmarket 小马达达市场版
  xmddshop 小马达达商户版
  xmhzproxy 小马互助代理版
```

### 同时也支持自定义的App正则表达式匹配，调用方式
```javascript
  var cusAppRegExp = {
    xmdd: /XMDD[\/]{0,1}([\d.]+)/i
  };
  
  $.detectFun(cusAppRegExp);
```


### 各App携带的UserAgent中信息样例
```text
  MicroMessenger/6.3.25  //微信
  QQ/6.5.6.459  //QQ
  UCBrowser/11.0.6.831  //UC浏览器
  Weibo(iPhone6,2__weibo__6.9.1__iphone__os9.3.5)  //新浪微博
  AliApp(TB/5.11.0)  //淘宝
  AliApp(AP/9.9.2.083030)  //支付宝
  AliApp(DingTalk/2.15.0)  //钉钉
  
  XMDD/3.3.0  //小马达达旧版本
  XmddApp(Xmdd/3.4.0)  //小马达达新版本
  XmddApp(XmddMarket/1.2.1)  //小马达达市场板
  XmddApp(XmddShop/1.7.1)  //小马达达商户版
  XmddApp(XmhzProxy/1.2.2)  //小马互助代理版
```
