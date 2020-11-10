// ==UserScript==
// @name		online-class-use-blank
// @namespace	https://github.com/green1052
// @version		1.0.0
// @homepageURL	https://github.com/green1052/online-class-use-blank
// @downloadURL https://raw.githubusercontent.com/green1052/online-class-use-blank/main/online-class-use-blank.user.js
// @include     oc40.ebssw.kr/mypage/userlrn/userLrnView.do?*
// @description	온라인 클래스 주소를 새창에서 열게 해줍니다.
// @run-at		document-end
// ==/UserScript==

(function () {
    "use strict";

    setTimeout(function () {
        document.querySelectorAll(".tui-editor-contents a").forEach(query => {
            const a = document.createElement("a");
            a.href = query.innerHTML;
            a.target = "_blank";
            a.innerHTML = query.innerHTML;

            query.outerHTML = a.outerHTML;
        });
    }, 1000);
})();