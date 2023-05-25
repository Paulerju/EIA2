"use strict";
var Canvas;
(function (Canvas) {
    class animate {
        windsock() {
            let imgData = Canvas.crc2.getImageData(10, 10, Canvas.canvas.width, Canvas.canvas.height);
            Canvas.crc2.putImageData(imgData, 10, 70);
        }
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=AnimateC.js.map