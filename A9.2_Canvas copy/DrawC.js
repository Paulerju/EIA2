"use strict";
var Canvas;
(function (Canvas) {
    ;
    class background {
        drawBackground() {
            console.log("Background");
            let gradient = Canvas.crc2.createLinearGradient(0, 0, 0, Canvas.crc2.canvas.height);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(0.12, "lightblue");
            gradient.addColorStop(1, "green");
            Canvas.crc2.fillStyle = gradient;
            Canvas.crc2.fillRect(0, 0, Canvas.crc2.canvas.width, Canvas.crc2.canvas.height);
        }
        ;
        drawMountains() {
            let gradient = Canvas.crc2.createLinearGradient(100, 50, 100, 250);
            gradient.addColorStop(0, "lightgray");
            gradient.addColorStop(1, "gray");
            Canvas.crc2.beginPath(); // small mountains
            Canvas.crc2.moveTo(-100, 335);
            Canvas.crc2.lineTo(40, 30);
            Canvas.crc2.lineTo(90, 130);
            Canvas.crc2.lineTo(160, 50);
            Canvas.crc2.lineTo(220, 130);
            Canvas.crc2.lineTo(300, 30);
            Canvas.crc2.lineTo(350, 130);
            Canvas.crc2.lineTo(450, 50);
            Canvas.crc2.lineTo(550, 110);
            Canvas.crc2.lineTo(620, 40);
            Canvas.crc2.lineTo(680, 110);
            Canvas.crc2.lineTo(750, 30);
            Canvas.crc2.lineTo(900, 330);
            Canvas.crc2.closePath();
            Canvas.crc2.strokeStyle = '#d9ddde';
            Canvas.crc2.stroke();
            Canvas.crc2.closePath();
            Canvas.crc2.fillStyle = gradient;
            Canvas.crc2.fill();
        }
        ;
        draw1() {
            Canvas.crc2.translate(Canvas.x, Canvas.y);
            Canvas.crc2.save();
            Canvas.crc2.fill(Canvas.particle);
            Canvas.crc2.stroke();
            Canvas.crc2.restore();
        }
        ;
        drawClouds() {
            let radiusParticle = 20;
            let gradient = Canvas.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            Canvas.particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(1, "HSLA(196, 100%, 95%, 0.8)");
            Canvas.crc2.fillStyle = gradient;
            this.draw1();
            Canvas.x = -10;
            Canvas.y = 7;
            this.draw1();
            Canvas.y = 0;
            this.draw1();
            Canvas.x = 100;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = 10;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = 0;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = -5;
            this.draw1();
            Canvas.x = 70;
            Canvas.y = 5;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = 5;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = -8;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = 8;
            this.draw1();
            Canvas.x = 80;
            Canvas.y = -10;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = 8;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = -8;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = -2;
            this.draw1();
            Canvas.x = 25;
            Canvas.y = -2;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = 0;
            this.draw1();
            Canvas.x = 70;
            Canvas.y = 10;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = 5;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = -5;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = -5;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = 5;
            this.draw1();
            Canvas.x = 60;
            Canvas.y = -25;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = 5;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = 10;
            this.draw1();
            Canvas.x = 20;
            Canvas.y = -5;
            this.draw1();
        }
        ;
        drawBigMountains() {
            let gradient = Canvas.crc2.createLinearGradient(0, 0, 0, Canvas.crc2.canvas.height);
            gradient.addColorStop(0, "lightgray");
            gradient.addColorStop(0.8, "gray");
            Canvas.crc2.beginPath();
            Canvas.crc2.moveTo(-130, 10);
            Canvas.crc2.lineTo(250, 350);
            Canvas.crc2.lineTo(-920, 350);
            Canvas.crc2.lineTo(-680, 10);
            Canvas.crc2.lineTo(-500, 250);
            Canvas.crc2.lineTo(-300, 10);
            Canvas.crc2.lineTo(-200, 100);
            Canvas.crc2.closePath();
            Canvas.crc2.strokeStyle = '#d9ddde';
            Canvas.crc2.stroke();
            Canvas.crc2.closePath();
            Canvas.crc2.fillStyle = "grey";
            Canvas.crc2.fill();
        }
        ;
        drawHouse() {
            Canvas.crc2.beginPath();
            Canvas.crc2.rect(-250, 500, 150, 150);
            Canvas.crc2.fillStyle = "#00394d";
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
            Canvas.crc2.beginPath();
            Canvas.crc2.rect(-275, 500, 200, 20);
            Canvas.crc2.stroke();
            Canvas.crc2.fillStyle = "black";
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
            Canvas.crc2.beginPath();
            Canvas.crc2.fillStyle = "#0086b3";
            Canvas.crc2.fillRect(-100, 525, 60, 10);
            Canvas.crc2.closePath();
            Canvas.crc2.beginPath();
            Canvas.crc2.fillStyle = "black";
            Canvas.crc2.fillRect(-50, 535, 5, 115);
            Canvas.crc2.closePath();
            Canvas.crc2.beginPath();
            Canvas.crc2.fillStyle = "#004b66";
            Canvas.crc2.fillRect(-101, 590, 5, 10);
        }
        ;
        drawTree() {
            Canvas.crc2.rect(-700, 330, 10, 60);
            Canvas.crc2.fillStyle = "#4d2600";
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
            Canvas.crc2.beginPath();
            Canvas.crc2.arc(-695, 330, 40, 0, 2 * Math.PI);
            Canvas.crc2.fillStyle = "green";
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
            Canvas.crc2.beginPath();
            Canvas.crc2.rect(-100, 420, 10, 60);
            Canvas.crc2.fillStyle = "#4d2600";
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
            Canvas.crc2.beginPath();
            Canvas.crc2.arc(-96, 400, 50, 0, 2 * Math.PI);
            Canvas.crc2.fillStyle = "green";
            Canvas.crc2.fill();
        }
        ;
        drawLanding() {
            Canvas.crc2.beginPath();
            Canvas.crc2.ellipse(-540, 550, 220, 90, 0, 0, 2 * Math.PI);
            Canvas.crc2.stroke();
            Canvas.crc2.fillStyle = "#bfbfbf";
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
        }
        ;
        drawSun() {
            let r1 = 30;
            let r2 = 150;
            let gradient = Canvas.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60 ,100%, 50%, 0)");
            Canvas.crc2.save();
            Canvas.crc2.fillStyle = gradient;
            Canvas.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            Canvas.crc2.fill();
            Canvas.crc2.restore();
        }
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
        flying(_position, _size, _color) {
            let x = _size.x;
            let y = _size.y;
            Canvas.crc2.beginPath();
            Canvas.crc2.fillStyle = "#003300";
            Canvas.crc2.fillRect(x, y, 5, 8);
            Canvas.crc2.fillStyle = "#ffffcc";
            Canvas.crc2.fillRect(x, y - 3, 5, 5);
            Canvas.crc2.closePath();
            Canvas.crc2.beginPath();
            Canvas.crc2.moveTo(x, y);
            Canvas.crc2.lineTo(x - 15, y - 15);
            Canvas.crc2.lineTo(x + 25, y - 25);
            Canvas.crc2.stroke();
            Canvas.crc2.fillStyle = _color;
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
        }
        ;
        human(_position, _color) {
            let x = _position.x;
            let y = _position.y;
            Canvas.crc2.beginPath();
            Canvas.crc2.fillStyle = _color;
            Canvas.crc2.fillRect(x, y, 15, 33);
            Canvas.crc2.fillStyle = "#ffffcc";
            Canvas.crc2.fillRect(x, y - 20, 15, 20);
            Canvas.crc2.closePath();
        }
        windThing() {
            Canvas.crc2.rect(-500, 590, 3, 80);
            Canvas.crc2.fillStyle = "black";
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
            Canvas.crc2.beginPath();
            Canvas.crc2.rect(-497, 590, 10, 20);
            Canvas.crc2.fillStyle = "white";
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
            Canvas.crc2.beginPath();
            Canvas.crc2.rect(-487, 591, 10, 18);
            Canvas.crc2.fillStyle = "red";
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
            Canvas.crc2.beginPath();
            Canvas.crc2.rect(-477, 592, 10, 16);
            Canvas.crc2.fillStyle = "white";
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
            Canvas.crc2.beginPath();
            Canvas.crc2.rect(-467, 593, 10, 14);
            Canvas.crc2.fillStyle = "red";
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
            Canvas.crc2.beginPath();
            Canvas.crc2.rect(-457, 595, 8, 10);
            Canvas.crc2.fillStyle = "white";
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
        }
    }
    Canvas.background = background;
})(Canvas || (Canvas = {}));
//# sourceMappingURL=DrawC.js.map