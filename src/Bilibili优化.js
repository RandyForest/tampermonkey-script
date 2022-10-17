// ==UserScript==
// @name         Bilibili优化
// @namespace    http://tampermonkey.net/
// @version      1
// @description	 优化界面。
// @author       Randy Bsk
// @iconURL		 https://static.hdslb.com/images/favicon.ico
// @match        *.bilibili.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// ==/UserScript==

// 入口
(function () {
  "use strict";

  var timeout = 200;
  var currentURL = window.location.href;
  var homeURL = /www\.bilibili\.com/;

  function removeHomeAd() {
    var ad2 = $("script[src^='//s1.hdslb.com/bfs/static/jinkela/home/']");
    // console.log(ad2);
    if (ad2 != null) {
      ad2.remove();
    }

    // 推荐手机客户端的广告
    var ad1 = document.querySelector("#fixed_app_download");
    console.log(ad1);
    if (ad1 != null) {
      ad1.remove();
    }
  }

  // console.log(document.body.innerHTML);

  if (homeURL.test(currentURL)) {
    setTimeout(() => {
      // console.log("a");
      removeHomeAd();
    }, timeout);
  }
})();
