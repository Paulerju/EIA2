"use strict";
var OMDF;
(function (OMDF) {
    class Donkey {
        drawDonkey() {
            this.drawBody();
            this.drawHead();
            this.drawEyes();
            this.drawNose();
            this.drawEars();
        }
        drawBody() {
            OMDF.crc2.fillStyle = "#8a8a8a";
            OMDF.crc2.fillRect(847, 250, 55, 50);
        }
        drawHead() {
            OMDF.crc2.fillStyle = "#9c9b9a";
            OMDF.crc2.fillRect(837, 195, 75, 70);
        }
        drawEyes() {
            OMDF.crc2.fillStyle = "black";
            OMDF.crc2.fillRect(850, 215, 12, 20);
            OMDF.crc2.fillStyle = "white";
            OMDF.crc2.fillRect(853, 218, 4, 4);
            OMDF.crc2.fillStyle = "black";
            OMDF.crc2.fillRect(885, 215, 12, 20);
            OMDF.crc2.fillStyle = "white";
            OMDF.crc2.fillRect(888, 218, 4, 4);
        }
        drawNose() {
            OMDF.crc2.beginPath();
            OMDF.crc2.ellipse(873, 248, 12, 12, 0, 0, Math.PI * 2);
            OMDF.crc2.fillStyle = "#8a8a8a";
            OMDF.crc2.fill();
            OMDF.crc2.closePath();
            OMDF.crc2.beginPath();
            OMDF.crc2.ellipse(867, 248, 3, 3, 0, 0, Math.PI * 2);
            OMDF.crc2.fillStyle = "#9c9b9a";
            OMDF.crc2.fill();
            OMDF.crc2.closePath();
            OMDF.crc2.beginPath();
            OMDF.crc2.ellipse(878, 248, 3, 3, 0, 0, Math.PI * 2);
            OMDF.crc2.fillStyle = "#9c9b9a";
            OMDF.crc2.fill();
            OMDF.crc2.closePath();
        }
        drawEars() {
            OMDF.crc2.fillStyle = "#9c9b9a";
            OMDF.crc2.beginPath();
            OMDF.crc2.moveTo(830, 160);
            OMDF.crc2.lineTo(837, 195);
            OMDF.crc2.lineTo(860, 195);
            OMDF.crc2.fill();
            OMDF.crc2.fillStyle = "#9c9b9a";
            OMDF.crc2.beginPath();
            OMDF.crc2.moveTo(920, 160);
            OMDF.crc2.lineTo(912, 195);
            OMDF.crc2.lineTo(890, 195);
            OMDF.crc2.fill();
        }
    }
    OMDF.Donkey = Donkey;
})(OMDF || (OMDF = {}));
//# sourceMappingURL=Donkey.js.map