"use strict";
var Canvas;
(function (Canvas) {
    class bee {
        circle(x, y, radius, fillCircle) {
            Canvas.crc2.beginPath();
            Canvas.crc2.arc(x, y, radius, 0, Math.PI * 2, false);
            if (fillCircle) {
                Canvas.crc2.fill();
            }
            else {
                Canvas.crc2.stroke();
            }
        }
        ;
        drawBee(x, y) {
            Canvas.crc2.lineWidth = 2;
            Canvas.crc2.strokeStyle = "black";
            Canvas.crc2.fillStyle = "#ffff80";
            this.circle(x, y, 8, true);
            this.circle(x, y, 8, false);
            this.circle(x - 5, y - 11, 5, false);
            this.circle(x + 5, y - 11, 5, false);
            this.circle(x - 2, y - 1, 2, false);
            this.circle(x + 2, y - 1, 2, false);
        }
        ;
    }
    Canvas.bee = bee;
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Bee.js.map