"use strict";
var OMDF2;
(function (OMDF2) {
    class Animal {
        name;
        sound;
        foodType;
        foodAmount;
        constructor(_name, _sound, _foodType, _foodAmount) {
            this.name = _name;
            this.sound = _sound;
            this.foodType = _foodType;
            this.foodAmount = _foodAmount;
        }
        drawChicken() {
            OMDF2.crc2.fillStyle = "#ffffff";
            OMDF2.crc2.fillRect(645, 250, 60, 50);
            OMDF2.crc2.fillStyle = "#ffffff";
            OMDF2.crc2.fillRect(637, 195, 75, 70);
            OMDF2.crc2.fillStyle = "black";
            OMDF2.crc2.fillRect(650, 215, 10, 20);
            OMDF2.crc2.fillStyle = "white";
            OMDF2.crc2.fillRect(653, 218, 4, 4);
            OMDF2.crc2.fillStyle = "black";
            OMDF2.crc2.fillRect(685, 215, 10, 20);
            OMDF2.crc2.fillStyle = "white";
            OMDF2.crc2.fillRect(688, 218, 4, 4);
            OMDF2.crc2.fillStyle = "#d6b245";
            OMDF2.crc2.beginPath();
            OMDF2.crc2.moveTo(660, 240);
            OMDF2.crc2.lineTo(688, 240);
            OMDF2.crc2.lineTo(673, 260);
            OMDF2.crc2.fill();
            OMDF2.crc2.fillStyle = "#dbc991";
            OMDF2.crc2.fillRect(668, 165, 10, 30);
        }
        drawCow() {
            OMDF2.crc2.fillStyle = "#e3dfdc";
            OMDF2.crc2.fillRect(250, 250, 50, 50);
            OMDF2.crc2.fillStyle = "#f0ece9";
            OMDF2.crc2.fillRect(240, 195, 70, 70);
            OMDF2.crc2.fillStyle = "black";
            OMDF2.crc2.fillRect(250, 215, 10, 20);
            OMDF2.crc2.fillStyle = "white";
            OMDF2.crc2.fillRect(253, 218, 4, 4);
            OMDF2.crc2.fillStyle = "black";
            OMDF2.crc2.fillRect(285, 215, 10, 20);
            OMDF2.crc2.fillStyle = "white";
            OMDF2.crc2.fillRect(288, 218, 4, 4);
            OMDF2.crc2.beginPath();
            OMDF2.crc2.ellipse(273, 245, 15, 10, 0, 0, Math.PI * 2);
            OMDF2.crc2.fillStyle = "#e3dfdc";
            OMDF2.crc2.fill();
            OMDF2.crc2.closePath();
            OMDF2.crc2.beginPath();
            OMDF2.crc2.ellipse(267, 245, 4, 4, 0, 0, Math.PI * 2);
            OMDF2.crc2.fillStyle = "#ababab";
            OMDF2.crc2.fill();
            OMDF2.crc2.closePath();
            OMDF2.crc2.beginPath();
            OMDF2.crc2.ellipse(280, 245, 4, 4, 0, 0, Math.PI * 2);
            OMDF2.crc2.fillStyle = "#ababab";
            OMDF2.crc2.fill();
            OMDF2.crc2.closePath();
            OMDF2.crc2.fillStyle = "#f0ece9";
            OMDF2.crc2.beginPath();
            OMDF2.crc2.moveTo(260, 175);
            OMDF2.crc2.lineTo(225, 195);
            OMDF2.crc2.lineTo(260, 195);
            OMDF2.crc2.fill();
            OMDF2.crc2.fillStyle = "#f0ece9";
            OMDF2.crc2.beginPath();
            OMDF2.crc2.moveTo(290, 175);
            OMDF2.crc2.lineTo(330, 195);
            OMDF2.crc2.lineTo(290, 195);
            OMDF2.crc2.fill();
        }
        drawDog() {
            OMDF2.crc2.fillStyle = "#858585";
            OMDF2.crc2.fillRect(50, 250, 50, 50);
            OMDF2.crc2.fillStyle = "#858585";
            OMDF2.crc2.fillRect(40, 195, 70, 70);
            OMDF2.crc2.fillStyle = "black";
            OMDF2.crc2.fillRect(50, 215, 14, 20);
            OMDF2.crc2.fillStyle = "white";
            OMDF2.crc2.fillRect(53, 218, 4, 4);
            OMDF2.crc2.fillStyle = "black";
            OMDF2.crc2.fillRect(85, 215, 14, 20);
            OMDF2.crc2.fillStyle = "white";
            OMDF2.crc2.fillRect(88, 218, 4, 4);
            OMDF2.crc2.fillStyle = "black";
            OMDF2.crc2.fillRect(68, 238, 10, 5);
            OMDF2.crc2.fillStyle = "#858585";
            OMDF2.crc2.fillRect(25, 188, 25, 15);
            OMDF2.crc2.fillStyle = "#858585";
            OMDF2.crc2.fillRect(100, 188, 25, 15);
        }
        drawDonkey() {
            OMDF2.crc2.fillStyle = "#8a8a8a";
            OMDF2.crc2.fillRect(847, 250, 55, 50);
            OMDF2.crc2.fillStyle = "#9c9b9a";
            OMDF2.crc2.fillRect(837, 195, 75, 70);
            OMDF2.crc2.fillStyle = "black";
            OMDF2.crc2.fillRect(850, 215, 12, 20);
            OMDF2.crc2.fillStyle = "white";
            OMDF2.crc2.fillRect(853, 218, 4, 4);
            OMDF2.crc2.fillStyle = "black";
            OMDF2.crc2.fillRect(885, 215, 12, 20);
            OMDF2.crc2.fillStyle = "white";
            OMDF2.crc2.fillRect(888, 218, 4, 4);
            OMDF2.crc2.beginPath();
            OMDF2.crc2.ellipse(873, 248, 12, 12, 0, 0, Math.PI * 2);
            OMDF2.crc2.fillStyle = "#8a8a8a";
            OMDF2.crc2.fill();
            OMDF2.crc2.closePath();
            OMDF2.crc2.beginPath();
            OMDF2.crc2.ellipse(867, 248, 3, 3, 0, 0, Math.PI * 2);
            OMDF2.crc2.fillStyle = "#9c9b9a";
            OMDF2.crc2.fill();
            OMDF2.crc2.closePath();
            OMDF2.crc2.beginPath();
            OMDF2.crc2.ellipse(878, 248, 3, 3, 0, 0, Math.PI * 2);
            OMDF2.crc2.fillStyle = "#9c9b9a";
            OMDF2.crc2.fill();
            OMDF2.crc2.closePath();
            OMDF2.crc2.fillStyle = "#9c9b9a";
            OMDF2.crc2.beginPath();
            OMDF2.crc2.moveTo(830, 160);
            OMDF2.crc2.lineTo(837, 195);
            OMDF2.crc2.lineTo(860, 195);
            OMDF2.crc2.fill();
            OMDF2.crc2.fillStyle = "#9c9b9a";
            OMDF2.crc2.beginPath();
            OMDF2.crc2.moveTo(920, 160);
            OMDF2.crc2.lineTo(912, 195);
            OMDF2.crc2.lineTo(890, 195);
            OMDF2.crc2.fill();
        }
        drawPig() {
            OMDF2.crc2.fillStyle = "#e8bebe";
            OMDF2.crc2.fillRect(445, 250, 60, 50);
            OMDF2.crc2.fillStyle = "#e8bebe";
            OMDF2.crc2.fillRect(437, 195, 75, 70);
            OMDF2.crc2.fillStyle = "black";
            OMDF2.crc2.fillRect(445, 215, 18, 20);
            OMDF2.crc2.fillStyle = "white";
            OMDF2.crc2.fillRect(447, 218, 4, 4);
            OMDF2.crc2.fillStyle = "black";
            OMDF2.crc2.fillRect(485, 215, 18, 20);
            OMDF2.crc2.fillStyle = "white";
            OMDF2.crc2.fillRect(488, 218, 4, 4);
            OMDF2.crc2.fillStyle = "#f5cece";
            OMDF2.crc2.fillRect(462, 238, 20, 20);
            OMDF2.crc2.fillStyle = "#e3b1b1";
            OMDF2.crc2.fillRect(466, 242, 4, 11);
            OMDF2.crc2.fillStyle = "#e3b1b1";
            OMDF2.crc2.fillRect(476, 242, 4, 11);
            OMDF2.crc2.fillStyle = "#e8bebe";
            OMDF2.crc2.beginPath();
            OMDF2.crc2.moveTo(460, 175);
            OMDF2.crc2.lineTo(430, 195);
            OMDF2.crc2.lineTo(460, 195);
            OMDF2.crc2.fill();
            OMDF2.crc2.fillStyle = "#e8bebe";
            OMDF2.crc2.beginPath();
            OMDF2.crc2.moveTo(490, 175);
            OMDF2.crc2.lineTo(518, 195);
            OMDF2.crc2.lineTo(490, 195);
            OMDF2.crc2.fill();
        }
        sing() {
            const heading = document.createElement("h3");
            heading.textContent = this.name + ":";
            document.body.appendChild(heading);
            const text = document.createElement("p");
            text.textContent = "Old MacDonald had a farm, and on his farm he had a " + this.name + ", Ee i ee i o!";
            document.body.appendChild(text);
        }
    }
    OMDF2.Animal = Animal;
})(OMDF2 || (OMDF2 = {}));
//# sourceMappingURL=Animal.js.map