"use strict";
var OMDF2;
(function (OMDF2) {
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
            OMDF2.crc2.fillStyle = "#362109";
            OMDF2.crc2.fillRect(20, 420, 150, 100);
            OMDF2.crc2.fillStyle = "#362109";
            OMDF2.crc2.fillRect(210, 420, 150, 100);
            OMDF2.crc2.fillStyle = "#362109";
            OMDF2.crc2.fillRect(400, 420, 150, 100);
            OMDF2.crc2.fillStyle = "#362109";
            OMDF2.crc2.fillRect(600, 420, 150, 100);
            OMDF2.crc2.fillStyle = "#362109";
            OMDF2.crc2.fillRect(810, 420, 150, 100);
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
            if (_animal == OMDF2.dog) {
                this.drawFood(3, 4, 5, 6, "#7d6f4f", "#8a7850", "#262626", "#262626");
                console.log("Dog: 2 portion left");
            }
            if (_animal == OMDF2.cow) {
                this.drawFood(22, 23, 24, 25, "#1d4727", "#262626", "#262626", "#262626");
                console.log("Cow: 1 portion left");
            }
            if (_animal == OMDF2.pig) {
                this.drawFood(41, 42, 43, 44, "#6e5b46", "#262626", "#262626", "#262626");
                console.log("Pig: 1 portion left");
            }
            if (_animal == OMDF2.chicken) {
                this.drawFood(61, 62, 63, 64, "#c7a22a", "#c7a228", "#d1aa2a", "#262626");
                console.log("Chicken: 3 portion left");
            }
            if (_animal == OMDF2.donkey) {
                this.drawFood(82, 83, 84, 85, "#93a646", "#8a9950", "#262626", "#262626");
                console.log("Donkey: 2 portion left");
            }
        }
        clearCanvas() {
            const canvas = this.context.canvas;
            this.context.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    OMDF2.Food = Food;
})(OMDF2 || (OMDF2 = {}));
//# sourceMappingURL=food.js.map