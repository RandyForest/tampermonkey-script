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

function setBlogLeftDivBackground() {
    var leftBox = document.querySelectorAll(".aside-box");
    if (leftBox != null) {
        leftBox.forEach(function (el) {
            var lbTitle = el.querySelector(".aside-title");
            if (lbTitle != null) {
                lbTitle.style.backgroundImage = "none";
                lbTitle.style.backgroundColor = "#ddd";
            }

            // var lbCenter = el.querySelector(".text-center");
            // if (lbCenter != null) {
            //     lbCenter.style.backgroundColor = "#ddd";
            // }

        })

    }

}

// 去除全局广告
function removeAd() {
    var ad1 = document.querySelector(".vip-totast");
    if (ad1 != null) {
        ad1.remove();
    }
}

// 去除博客页广告
function removeBolgAd() {


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

    var ad5 = document.querySelector(".mb8");
    if (ad5 != null) {
        ad5.remove();
    }

}

// 设置博客页背景
function setBlogBackground() {
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

function setBlogPage() {
    var mainBox = document.querySelector("#mainBox");
    var aside = document.querySelector("#mainBox > aside");
    var main = document.querySelector("#mainBox > main");
    var recomRight = document.querySelector(".recommend-right");

    if (mainBox != null) {
        mainBox.style.display = "flex";
    }

    if (aside != null) {
        aside.style.order = 1;
    }

    if (main != null) {
        main.style.order = 2;
        main.style.marginLeft = "8px";
    }

    if (recomRight != null) {
        recomRight.style.order = 3;
    }

    // window.addEventListener("resize", function () {
    //     console.log(this.window.innerWidth);
    //     var aside = document.querySelector("#mainBox > aside");
    //     if (this.window.innerWidth < 1280) {
    //         aside.style.display="none";
    //     }else{
    //         aside.style.display="";

    //     }
    // })
}

// 入口
(function () {
    "use strict";

    // document.querySelectorAll("script").forEach(function(el){
    //     el.remove();
    // })

    // console.log(document.body.innerHTML);
    removeAd();

    if (bolg.test(currentURL)) {
        setBlogPage();
        setBlogBackground();
        setBlogLeftDivBackground();
        removeBolgAd();
        clickBlogReadMore();
    }

})();