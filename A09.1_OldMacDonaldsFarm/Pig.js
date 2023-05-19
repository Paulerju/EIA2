"use strict";
var OMDF;
(function (OMDF) {
    class Pig {
        drawPig() {
            this.drawBody();
            this.drawHead();
            this.drawEyes();
            this.drawNose();
            this.drawEars();
        }
        drawBody() {
            OMDF.crc2.fillStyle = "#e8bebe";
            OMDF.crc2.fillRect(445, 250, 60, 50);
        }
        drawHead() {
            OMDF.crc2.fillStyle = "#e8bebe";
            OMDF.crc2.fillRect(437, 195, 75, 70);
        }
        drawEyes() {
            OMDF.crc2.fillStyle = "black";
            OMDF.crc2.fillRect(445, 215, 18, 20);
            OMDF.crc2.fillStyle = "white";
            OMDF.crc2.fillRect(447, 218, 4, 4);
            OMDF.crc2.fillStyle = "black";
            OMDF.crc2.fillRect(485, 215, 18, 20);
            OMDF.crc2.fillStyle = "white";
            OMDF.crc2.fillRect(488, 218, 4, 4);
        }
        drawNose() {
            OMDF.crc2.fillStyle = "#f5cece";
            OMDF.crc2.fillRect(462, 238, 20, 20);
            OMDF.crc2.fillStyle = "#e3b1b1";
            OMDF.crc2.fillRect(466, 242, 4, 11);
            OMDF.crc2.fillStyle = "#e3b1b1";
            OMDF.crc2.fillRect(476, 242, 4, 11);
        }
        drawEars() {
            OMDF.crc2.fillStyle = "#e8bebe";
            OMDF.crc2.beginPath();
            OMDF.crc2.moveTo(460, 175);
            OMDF.crc2.lineTo(430, 195);
            OMDF.crc2.lineTo(460, 195);
            OMDF.crc2.fill();
            OMDF.crc2.fillStyle = "#e8bebe";
            OMDF.crc2.beginPath();
            OMDF.crc2.moveTo(490, 175);
            OMDF.crc2.lineTo(518, 195);
            OMDF.crc2.lineTo(490, 195);
            OMDF.crc2.fill();
        }
    }
    OMDF.Pig = Pig;
})(OMDF || (OMDF = {}));
//# sourceMappingURL=Pig.js.map