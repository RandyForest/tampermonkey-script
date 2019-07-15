// ==UserScript==
// @name         知乎优化
// @namespace    http://tampermonkey.net/
// @version      1
// @description	 优化界面。
// @author       Randy Bsk
// @iconURL		 https://static.zhihu.com/static/favicon.ico
// @match        *.zhihu.com/*
// @grant        none
// ==/UserScript==

var timeout = 0;
var currentURL = window.location.href;
var question = /.*.zhihu.com\/question\//;

function removeAd() {
    // 检查AdBlock的div
    var ad1 = document.querySelector(".AdblockBanner");
    if (ad1 != null) {
        ad1.remove();
    }
}

// 入口
(function () {
    "use strict";

    if (question.test(currentURL)) {
        removeAd();
    }

})();