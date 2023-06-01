"use strict";
var Canvas;
(function (Canvas) {
    let canvas = document.querySelector("canvas");
    class animate {
        windsock() {
            let imgData = Canvas.crc2.getImageData(10, 10, canvas.width, canvas.height);
            Canvas.crc2.putImageData(imgData, 10, 70);
        }
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=AnimateC.js.map