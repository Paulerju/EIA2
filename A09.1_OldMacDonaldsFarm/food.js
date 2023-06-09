"use strict";
var OMDF1;
(function (OMDF1) {
    class Food {
        blockSize;
        context;
        constructor(_blockSize, _context) {
            this.blockSize = _blockSize;
            this.context = _context;
        }
        drawBlock(x, y, color) {
            const xPos = x * this.blockSize;
            const yPos = y * this.blockSize;
            this.context.fillStyle = color;
            this.context.fillRect(xPos, yPos, this.blockSize, this.blockSize);
        }
        drawManger() {
            OMDF1.crc2.fillStyle = "#362109";
            OMDF1.crc2.fillRect(20, 420, 150, 100);
            OMDF1.crc2.fillStyle = "#362109";
            OMDF1.crc2.fillRect(210, 420, 150, 100);
            OMDF1.crc2.fillStyle = "#362109";
            OMDF1.crc2.fillRect(400, 420, 150, 100);
            OMDF1.crc2.fillStyle = "#362109";
            OMDF1.crc2.fillRect(600, 420, 150, 100);
            OMDF1.crc2.fillStyle = "#362109";
            OMDF1.crc2.fillRect(810, 420, 150, 100);
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
            return;
        }
        eat(_animal) {
            if (_animal == OMDF1.dog) {
                this.drawFood(3, 4, 5, 6, "#7d6f4f", "#8a7850", "#262626", "#262626");
                console.log("Dog: 2 portion left");
            }
            if (_animal == OMDF1.cow) {
                this.drawFood(22, 23, 24, 25, "#1d4727", "#262626", "#262626", "#262626");
                console.log("Cow: 1 portion left");
            }
            if (_animal == OMDF1.pig) {
                this.drawFood(41, 42, 43, 44, "#6e5b46", "#262626", "#262626", "#262626");
                console.log("Pig: 1 portion left");
            }
            if (_animal == OMDF1.chicken) {
                this.drawFood(61, 62, 63, 64, "#c7a22a", "#c7a228", "#d1aa2a", "#262626");
                console.log("Chicken: 3 portion left");
            }
            if (_animal == OMDF1.donkey) {
                this.drawFood(82, 83, 84, 85, "#93a646", "#8a9950", "#262626", "#262626");
                console.log("Donkey: 2 portion left");
            }
        }
        clearCanvas() {
            const canvas = this.context.canvas;
            this.context.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    OMDF1.Food = Food;
})(OMDF1 || (OMDF1 = {}));
//# sourceMappingURL=food.js.map