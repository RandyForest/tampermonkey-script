// ==UserScript==
// @name         百度优化
// @namespace    http://tampermonkey.net/
// @version      1
// @description	 界面优化。
// @author       Randy Bsk
// @iconURL		 https://www.baidu.com/favicon.ico
// @match        *.baidu.com/*
// @grant        none
// ==/UserScript==

var timeout = 0
var currentURL = window.location.href;
var tieba = /tieba.baidu.com/

function removeLoginDiv() {
    // 移除遮罩
    var fullDiv=document.querySelector("#TANGRAM__PSP_23__");
    if (fullDiv!=null) {
        fullDiv.remove
    }

    // 移除登录框
    var loginDiv=document.querySelector("#passport-login-pop");
    if (loginDiv!=null) {
        loginDiv.remove
    }
}

// 入口
(function () {
    "use strict";

    // console.log(document.body.innerHTML);

    if (tieba.test(currentURL)) {
        setBackground();

        clickReadMore();
    } else {

    }



})();