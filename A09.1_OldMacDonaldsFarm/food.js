"use strict";
var OMDF;
(function (OMDF) {
    class Food {
        blockSize;
        context;
        constructor(blockSize, context) {
            this.blockSize = blockSize;
            this.context = context;
        }
        drawBlock(x, y, color) {
            const xPos = x * this.blockSize;
            const yPos = y * this.blockSize;
            this.context.fillStyle = color;
            this.context.fillRect(xPos, yPos, this.blockSize, this.blockSize);
        }
        drawManger() {
            OMDF.crc2.fillStyle = "#362109";
            OMDF.crc2.fillRect(20, 420, 150, 100);
            OMDF.crc2.fillStyle = "#362109";
            OMDF.crc2.fillRect(210, 420, 150, 100);
            OMDF.crc2.fillStyle = "#362109";
            OMDF.crc2.fillRect(400, 420, 150, 100);
            OMDF.crc2.fillStyle = "#362109";
            OMDF.crc2.fillRect(600, 420, 150, 100);
            OMDF.crc2.fillStyle = "#362109";
            OMDF.crc2.fillRect(810, 420, 150, 100);
        }
        drawFood(_a, _b, _c, _d, _color1, _color2, _color3, _color4) {
            let i = 0;
            while (i < 13) {
                this.drawBlock(_a, 41, _color1);
                i++;
                _a++;
            }
            while (i < 24) {
                this.drawBlock(_b, 40, _color2);
                i++;
                _b++;
            }
            while (i < 33) {
                this.drawBlock(_c, 39, _color3);
                i++;
                _c++;
            }
            while (i < 40) {
                this.drawBlock(_d, 38, _color4);
                i++;
                _d++;
            }
            console.log("food");
            return;
        }
        clearCanvas() {
            const canvas = this.context.canvas;
            this.context.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    OMDF.Food = Food;
})(OMDF || (OMDF = {}));
//# sourceMappingURL=food.js.map