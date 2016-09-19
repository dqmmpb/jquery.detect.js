'use strict';

$(function() {

  $('#userAgent .text').html(navigator.userAgent);
  $('#appVersion .text').html(navigator.appVersion);
  $('#info .text').html(JSON.stringify($.detect));

  // 新增小马互助App检测
/*  var userInfo = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 XmddApp(Xmdd/3.4.0)';
  var reg = /(?:XmddApp\()?Xmdd[\/]{0,1}([\d.]+)(?:\))?/i;
  var match = userInfo.match(reg);
  console.log(match);
  console.log(match[1]);

  var userInfo = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 XmddApp(XmddMarket/1.2.1)';
  var reg = /(?:XmddApp\()?XmddMarket[\/]{0,1}([\d.]+)(?:\))?/i;
  var match = userInfo.match(reg);
  console.log(match);
  console.log(match[1]);

  var userInfo = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 XmddApp(XmddShop/1.7.1)';
  var reg = /(?:XmddApp\()?XmddShop[\/]{0,1}([\d.]+)(?:\))?/i;
  var match = userInfo.match(reg);
  console.log(match);
  console.log(match[1]);

  var userInfo = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 XmddApp(XmhzProxy/1.2.2)';
  var reg = /(?:XmddApp\()?XmhzProxy[\/]{0,1}([\d.]+)(?:\))?/i;
  var match = userInfo.match(reg);
  console.log(match);
  console.log(match[1]);*/
});
