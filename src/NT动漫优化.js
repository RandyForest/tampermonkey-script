// ==UserScript==
// @name         NT动漫优化
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description	 优化界面。
// @author       Randy Bsk
// @iconURL		 http://www.ntyou.cc/template/ntyou//image/favicon.ico
// @match        *.ntyou.cc/*
// @run-at       document-idle
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// ==/UserScript==

// 入口
(function () {
  console.log("【NT动漫优化】");

  const cssText = `
  /** 去广告 */
  #HMcoupletDivleft { display: none }
  #HMcoupletDivright { display: none }
  #HMRichBox { display: none !important }

  /** 样式优化 */
  .mac_comment { margin: 0 8px; }
  `;

  /**
   * @type {HTMLStyleElement}
   */
  const styleEl = document.createElement("style");
  styleEl.id="ntOptimization"
  const cssTextEl= document.createTextNode(cssText)
  styleEl.appendChild(cssTextEl);
  // styleEl.sheet.insertRule("#HMcoupletDivleft { display:none }");
  // styleEl.sheet.insertRule("#HMcoupletDivright { display:none }");
  // styleEl.sheet.insertRule("#HMRichBox { display:none }");

  document.head.appendChild(styleEl);
})();
