// ==UserScript==
// @name         51CTO优化
// @namespace    http://tampermonkey.net/
// @version      1
// @description	 优化界面。
// @author       Randy Bsk
// @iconURL		 http://www.51cto.com/favicon.ico
// @match        *.51cto.com/*
// @grant        none
// ==/UserScript==

// 入口
(function () {
  "use strict";

  var timeout = 0;
  var currentURL = window.location.href;
  var bolg = /\/\/blog.51cto.com/;

  function removeAd() {
    // 悬浮广告
    var ad1 = document.querySelector("div.group_img_box");
    if (ad1 != null) {
      ad1.remove();
    }

    // 顶部广告
    var ad2 = document.querySelector("#topbanner14");
    if (ad2 != null) {
      ad2.remove();
    }

    var ad3 = document.querySelector(".zhiCustomBtn");
    if (ad3 != null) {
      ad3.remove();
    }
  }

  function removeMask() {
    // 去除所有内部脚本
    var scriptElems = document.body.querySelectorAll("script");
    if (scriptElems != null) {
      for (const i of scriptElems) {
        i.remove();
      }
    }

    // 去除遮罩
    var maskDiv = document.querySelector("#Mask");
    if (maskDiv != null) {
      maskDiv.remove();
    }
  }

  // console.log(document.body.innerHTML);

  if (bolg.test(currentURL)) {
    removeMask();
    removeAd();
  }
})();
