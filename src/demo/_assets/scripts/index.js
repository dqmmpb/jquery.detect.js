'use strict';

$(function() {

  $('#userAgent .text').html(navigator.userAgent);
  $('#appVersion .text').html(navigator.appVersion);
  $('#info .text').html(JSON.stringify($.detect));

});
