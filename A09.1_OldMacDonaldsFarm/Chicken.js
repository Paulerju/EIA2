"use strict";
var OMDF;
(function (OMDF) {
    class Chicken {
        drawChicken() {
            this.drawBody();
            this.drawHead();
            this.drawEyes();
            this.drawNose();
            this.drawEars();
        }
        drawBody() {
            OMDF.crc2.fillStyle = "#ffffff";
            OMDF.crc2.fillRect(645, 250, 60, 50);
        }
        drawHead() {
            OMDF.crc2.fillStyle = "#ffffff";
            OMDF.crc2.fillRect(637, 195, 75, 70);
        }
        drawEyes() {
            OMDF.crc2.fillStyle = "black";
            OMDF.crc2.fillRect(650, 215, 10, 20);
            OMDF.crc2.fillStyle = "white";
            OMDF.crc2.fillRect(653, 218, 4, 4);
            OMDF.crc2.fillStyle = "black";
            OMDF.crc2.fillRect(685, 215, 10, 20);
            OMDF.crc2.fillStyle = "white";
            OMDF.crc2.fillRect(688, 218, 4, 4);
        }
        drawNose() {
            OMDF.crc2.fillStyle = "#d6b245";
            OMDF.crc2.beginPath();
            OMDF.crc2.moveTo(660, 240);
            OMDF.crc2.lineTo(688, 240);
            OMDF.crc2.lineTo(673, 260);
            OMDF.crc2.fill();
        }
        drawEars() {
            OMDF.crc2.fillStyle = "#dbc991";
            OMDF.crc2.fillRect(668, 165, 10, 30);
        }
    }
    OMDF.Chicken = Chicken;
})(OMDF || (OMDF = {}));
//# sourceMappingURL=Chicken.js.map