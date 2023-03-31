"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", hndload);
    let span = document.getElementById("#span");
    function hndload() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.getElementById("div0")?.addEventListener("click", logInfo);
        document.getElementById("div1")?.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("div0")?.addEventListener("keyup", logInfo);
        document.getElementById("div1")?.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        span.innerHTML = "mouse position: " + x + " Events target: " + y;
        span.style.setProperty("margin-top", x);
        span.style.setProperty("margin-left", y);
    }
    function logInfo() {
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=Inspector.js.map