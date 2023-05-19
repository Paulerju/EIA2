"use strict";
var OMDF;
(function (OMDF) {
    class Dog {
        drawDog() {
            this.drawBody();
            this.drawHead();
            this.drawEyes();
            this.drawNose();
            this.drawEars();
        }
        drawBody() {
            OMDF.crc2.fillStyle = "#858585";
            OMDF.crc2.fillRect(50, 250, 50, 50); // Body
        }
        drawHead() {
            OMDF.crc2.fillStyle = "#858585";
            OMDF.crc2.fillRect(40, 195, 70, 70); // Head
        }
        drawEyes() {
            // Left eye
            OMDF.crc2.fillStyle = "black";
            OMDF.crc2.fillRect(50, 215, 14, 20);
            OMDF.crc2.fillStyle = "white";
            OMDF.crc2.fillRect(53, 218, 4, 4);
            // Right eye
            OMDF.crc2.fillStyle = "black";
            OMDF.crc2.fillRect(85, 215, 14, 20);
            OMDF.crc2.fillStyle = "white";
            OMDF.crc2.fillRect(88, 218, 4, 4);
        }
        drawNose() {
            OMDF.crc2.fillStyle = "black";
            OMDF.crc2.fillRect(68, 238, 10, 5);
        }
        drawEars() {
            // Left ear
            OMDF.crc2.fillStyle = "#858585";
            OMDF.crc2.fillRect(25, 188, 25, 15);
            // Right ear
            OMDF.crc2.fillStyle = "#858585";
            OMDF.crc2.fillRect(100, 188, 25, 15);
        }
    }
    OMDF.Dog = Dog;
})(OMDF || (OMDF = {}));
//# sourceMappingURL=Dog.js.map