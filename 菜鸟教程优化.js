// ==UserScript==
// @name         菜鸟教程优化
// @namespace    http://tampermonkey.net/
// @version      1
// @description	 优化界面。
// @author       Randy Bsk
// @iconURL		 https://static.runoob.com/images/favicon.ico
// @match        *.runoob.com/*
// @grant        none
// ==/UserScript==

var timeout = 0;
var currentURL = window.location.href;
var tutorialsPage = /.*\.runoob.com\/.+\//;

// 优化界面
function setTutorialsPage() {
    var mainRow = document.querySelector(".main > .row");
    if (mainRow != null) {
        mainRow.style.display="flex";
    }
    
    var leftColumn = document.querySelector(".left-column");
    if (leftColumn != null) {
        leftColumn.style.width = "auto";
        leftColumn.style.minWidth = "150px";
        leftColumn.style.maxWidth = "200px";
    }

    var middleColumn = document.querySelector(".middle-column");
    if (middleColumn != null) {
        middleColumn.style.width = "auto";
        // leftColumn.style.maxWidth="150px";
    }

}

// 入口
(function () {
    "use strict";

    if (tutorialsPage.test(currentURL)) {
        setTutorialsPage();
    }

})();