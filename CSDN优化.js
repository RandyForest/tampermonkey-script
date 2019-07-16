// ==UserScript==
// @name         CSDN优化
// @namespace    http://tampermonkey.net/
// @version      1
// @description	 自动点击阅读更多按钮。优化界面。
// @author       Randy Bsk
// @iconURL		 https://csdnimg.cn/public/favicon.ico
// @match        *.csdn.net/*
// @grant        none
// ==/UserScript==

var timeout = 0
var currentURL = window.location.href;
var bolg = /\/\/blog.csdn.net/

// 去除博客页广告
function removeBolgAd() {
    var ad1 = document.querySelector(".vip-totast");
    if (ad1 != null) {
        ad1.remove();
    }

    var ad2 = document.querySelector(".csdn-side-toolbar");
    if (ad2 != null) {
        ad2.remove();
    }
    
    var ad3 = document.querySelector("#passportbox");
    if (ad3 != null) {
        ad3.remove();
    }
    
    var ad4 = document.querySelector(".login-mark");
    if (ad4 != null) {
        ad4.remove();
    }

}

// 设置博客页背景
function setBlogBackground(params) {
    console.log("设置背景");

    // 去除背景图
    document.querySelector("body").style.backgroundImage = "none"

    // 更改背景颜色
    document.querySelector("body").style.backgroundColor = "#eee";

}

// 博客页自动点击“查看更多”
function clickBlogReadMore() {
    console.log("自动点击“查看更多”");

    var readmoreBtn = document.querySelector(".btn-readmore");
    // console.log(readmoreBtn.innerText);
    if (readmoreBtn != null) {
        readmoreBtn.click();
    }

}

// 入口
(function () {
    "use strict";

    // console.log(document.body.innerHTML);

    if (bolg.test(currentURL)) {
        setBlogBackground();
        removeBolgAd();
        clickBlogReadMore();
    }

})();