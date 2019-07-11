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

// 设置背景
function setBackground(params) {
    console.log("设置背景");

    // 去除背景图
    document.querySelector("body").style.backgroundImage = "none"

    // 更改背景颜色
    document.querySelector("body").style.backgroundColor = "#eee";

}

// 自动点击“查看更多”
function clickReadMore() {
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
        setBackground();

        clickReadMore();
    } else {

    }



    // 匿名访问
    // var d = document;
    // window.csdn.anonymousUserLimit.judgement = function () {
    //     return !0;
    // };


    // 移除登录遮罩
    // document.querySelector("body > div.login-mark").remove();

    // 移除登录界面
    // document.querySelector("#passportbox").remove();


    // document.getElementsByClassName("pulllog-box")[0].style.display = "";
    // document.getElementsByClassName("meau-list")[0].style.display = "none";
    // document.getElementsByClassName("persion_article")[0].style.display = "none";
    // document.getElementsByClassName("edu-promotion")[0].style.display = "none";


})();