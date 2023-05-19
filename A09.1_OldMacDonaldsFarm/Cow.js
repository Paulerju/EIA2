"use strict";
var OMDF;
(function (OMDF) {
    class Cow {
        drawCow() {
            this.drawBody();
            this.drawHead();
            this.drawEyes();
            this.drawNose();
            this.drawEars();
        }
        drawBody() {
            OMDF.crc2.fillStyle = "#e3dfdc";
            OMDF.crc2.fillRect(250, 250, 50, 50);
        }
        drawHead() {
            OMDF.crc2.fillStyle = "#f0ece9";
            OMDF.crc2.fillRect(240, 195, 70, 70);
        }
        drawEyes() {
            OMDF.crc2.fillStyle = "black";
            OMDF.crc2.fillRect(250, 215, 10, 20);
            OMDF.crc2.fillStyle = "white";
            OMDF.crc2.fillRect(253, 218, 4, 4);
            OMDF.crc2.fillStyle = "black";
            OMDF.crc2.fillRect(285, 215, 10, 20);
            OMDF.crc2.fillStyle = "white";
            OMDF.crc2.fillRect(288, 218, 4, 4);
        }
        drawNose() {
            OMDF.crc2.beginPath();
            OMDF.crc2.ellipse(273, 245, 15, 10, 0, 0, Math.PI * 2);
            OMDF.crc2.fillStyle = "#e3dfdc";
            OMDF.crc2.fill();
            OMDF.crc2.closePath();
            OMDF.crc2.beginPath();
            OMDF.crc2.ellipse(267, 245, 4, 4, 0, 0, Math.PI * 2);
            OMDF.crc2.fillStyle = "#ababab";
            OMDF.crc2.fill();
            OMDF.crc2.closePath();
            OMDF.crc2.beginPath();
            OMDF.crc2.ellipse(280, 245, 4, 4, 0, 0, Math.PI * 2);
            OMDF.crc2.fillStyle = "#ababab";
            OMDF.crc2.fill();
            OMDF.crc2.closePath();
        }
        drawEars() {
            OMDF.crc2.fillStyle = "#f0ece9";
            OMDF.crc2.beginPath();
            OMDF.crc2.moveTo(260, 175);
            OMDF.crc2.lineTo(225, 195);
            OMDF.crc2.lineTo(260, 195);
            OMDF.crc2.fill();
            OMDF.crc2.fillStyle = "#f0ece9";
            OMDF.crc2.beginPath();
            OMDF.crc2.moveTo(290, 175);
            OMDF.crc2.lineTo(330, 195);
            OMDF.crc2.lineTo(290, 195);
            OMDF.crc2.fill();
        }
    }
    OMDF.Cow = Cow;
})(OMDF || (OMDF = {}));
//# sourceMappingURL=Cow.js.map