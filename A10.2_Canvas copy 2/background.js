"use strict";
var FlyingPeople3;
(function (FlyingPeople3) {
    function drawBackground() {
        console.log("Background");
        let gradient = FlyingPeople3.crc2.createLinearGradient(0, 0, 0, FlyingPeople3.crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(198, 78%, 42%, 1)");
        gradient.addColorStop(FlyingPeople3.goldy, "lightgreen");
        gradient.addColorStop(1, "HSL(100,80%,30%)");
        console.log(gradient);
        FlyingPeople3.crc2.fillStyle = gradient;
        FlyingPeople3.crc2.fillRect(0, 0, FlyingPeople3.crc2.canvas.width, FlyingPeople3.crc2.canvas.height);
        console.log(FlyingPeople3.canvas);
    }
    FlyingPeople3.drawBackground = drawBackground;
    function drawMountains(_position) {
        let gradient = FlyingPeople3.crc2.createLinearGradient(100, 50, 100, 250);
        gradient.addColorStop(0, "lightgray");
        gradient.addColorStop(1, "gray");
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.moveTo(-100, 335);
        FlyingPeople3.crc2.lineTo(40, 30);
        FlyingPeople3.crc2.lineTo(90, 130);
        FlyingPeople3.crc2.lineTo(160, 50);
        FlyingPeople3.crc2.lineTo(220, 130);
        FlyingPeople3.crc2.lineTo(300, 30);
        FlyingPeople3.crc2.lineTo(350, 130);
        FlyingPeople3.crc2.lineTo(450, 50);
        FlyingPeople3.crc2.lineTo(550, 110);
        FlyingPeople3.crc2.lineTo(620, 40);
        FlyingPeople3.crc2.lineTo(680, 110);
        FlyingPeople3.crc2.lineTo(750, 30);
        FlyingPeople3.crc2.lineTo(900, 330);
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.strokeStyle = '#d9ddde';
        FlyingPeople3.crc2.stroke();
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.fillStyle = gradient;
        FlyingPeople3.crc2.fill();
        console.log("Mountainsarethere");
    }
    FlyingPeople3.drawMountains = drawMountains;
    function drawSunny(_position) {
        console.log('Sun', _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = FlyingPeople3.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60 ,100%, 50%, 0)");
        FlyingPeople3.crc2.save();
        FlyingPeople3.crc2.translate(_position.x, _position.y);
        FlyingPeople3.crc2.fillStyle = gradient;
        FlyingPeople3.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        FlyingPeople3.crc2.fill();
        FlyingPeople3.crc2.restore();
    }
    FlyingPeople3.drawSunny = drawSunny;
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = FlyingPeople3.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        FlyingPeople3.crc2.save();
        FlyingPeople3.crc2.translate(_position.x, _position.y);
        FlyingPeople3.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            FlyingPeople3.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            FlyingPeople3.crc2.translate(x, y);
            FlyingPeople3.crc2.fill(particle);
            FlyingPeople3.crc2.restore();
        }
        FlyingPeople3.crc2.restore();
    }
    FlyingPeople3.drawCloud = drawCloud;
    function drawLandingCircle(_position, _radiusX, _radiusY) {
        FlyingPeople3.crc2.save();
        FlyingPeople3.crc2.translate(_position.x, _position.y);
        FlyingPeople3.crc2.scale(_radiusX / _radiusY, 1);
        FlyingPeople3.crc2.fillStyle = "green";
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.arc(0, 0, _radiusY, 0, 2 * Math.PI);
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.fill();
        FlyingPeople3.crc2.restore();
    }
    FlyingPeople3.drawLandingCircle = drawLandingCircle;
    function drawTriangle(_position) {
        FlyingPeople3.crc2.save();
        FlyingPeople3.crc2.translate(_position.x, _position.y);
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.moveTo(0, 0);
        FlyingPeople3.crc2.lineTo(900, 0);
        FlyingPeople3.crc2.lineTo(0, -300);
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.fillStyle = "darkgrey";
        FlyingPeople3.crc2.fill();
        FlyingPeople3.crc2.restore();
    }
    FlyingPeople3.drawTriangle = drawTriangle;
    function drawShack(_position) {
        FlyingPeople3.crc2.save();
        FlyingPeople3.crc2.translate(_position.x, _position.y);
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.moveTo(0, 0);
        FlyingPeople3.crc2.lineTo(70, 0);
        FlyingPeople3.crc2.lineTo(70, -50);
        FlyingPeople3.crc2.lineTo(0, -100);
        FlyingPeople3.crc2.fillStyle = "lightblue";
        FlyingPeople3.crc2.fill();
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.moveTo(-50, -70);
        FlyingPeople3.crc2.lineTo(5, -70);
        FlyingPeople3.crc2.lineWidth = 10;
        FlyingPeople3.crc2.strokeStyle = "blue";
        FlyingPeople3.crc2.stroke();
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.moveTo(80, -50);
        FlyingPeople3.crc2.lineTo(-10, -100);
        FlyingPeople3.crc2.lineWidth = 10;
        FlyingPeople3.crc2.strokeStyle = "red";
        FlyingPeople3.crc2.stroke();
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.moveTo(-45, 0);
        FlyingPeople3.crc2.lineTo(-45, -70);
        FlyingPeople3.crc2.strokeStyle = "black";
        FlyingPeople3.crc2.lineWidth = 2;
        FlyingPeople3.crc2.stroke();
        FlyingPeople3.crc2.restore();
    }
    FlyingPeople3.drawShack = drawShack;
    function drawWindSock(_position) {
        console.log("Windsock");
        FlyingPeople3.crc2.save();
        FlyingPeople3.crc2.translate(_position.x, _position.y);
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.rect(70, -20, 5, 50);
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.fillStyle = "black";
        FlyingPeople3.crc2.fill();
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.bezierCurveTo(72, -14, 100, -40, 150, -25);
        FlyingPeople3.crc2.lineTo(152, -55);
        FlyingPeople3.crc2.bezierCurveTo(150, -55, 100, -80, 70, -55);
        FlyingPeople3.crc2.fillStyle = "red";
        FlyingPeople3.crc2.fill();
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.ellipse(150, -40, 5, 15, Math.PI, 0, 2 * Math.PI);
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.fillStyle = "white";
        FlyingPeople3.crc2.fill();
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.ellipse(72, -35, 8, 20, Math.PI, 0, 2 * Math.PI);
        FlyingPeople3.crc2.fillStyle = "white";
        FlyingPeople3.crc2.fill();
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.restore();
    }
    FlyingPeople3.drawWindSock = drawWindSock;
    function drawTree(_position) {
        console.log("Tree");
        FlyingPeople3.crc2.save();
        FlyingPeople3.crc2.translate(_position.x, _position.y);
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeople3.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeople3.crc2.fillStyle = "darkgreen";
        FlyingPeople3.crc2.fill();
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.restore();
    }
    FlyingPeople3.drawTree = drawTree;
    function drawTree1(_position) {
        console.log("Tree");
        FlyingPeople3.crc2.save();
        FlyingPeople3.crc2.translate(_position.x, _position.y);
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeople3.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeople3.crc2.fillStyle = "darkgreen";
        FlyingPeople3.crc2.fill();
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.restore();
    }
    FlyingPeople3.drawTree1 = drawTree1;
    function drawTree2(_position) {
        console.log("Tree");
        FlyingPeople3.crc2.save();
        FlyingPeople3.crc2.translate(_position.x, _position.y);
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeople3.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeople3.crc2.fillStyle = "HSLA(126, 56%, 42%, 1)";
        FlyingPeople3.crc2.fill();
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.restore();
    }
    FlyingPeople3.drawTree2 = drawTree2;
    function drawTree3(_position) {
        console.log("Tree");
        FlyingPeople3.crc2.save();
        FlyingPeople3.crc2.translate(_position.x, _position.y);
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeople3.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeople3.crc2.fillStyle = "HSLA(137, 74%, 42%, 1)";
        FlyingPeople3.crc2.fill();
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.restore();
    }
    FlyingPeople3.drawTree3 = drawTree3;
    function drawTree4(_position) {
        console.log("Tree");
        FlyingPeople3.crc2.save();
        FlyingPeople3.crc2.translate(_position.x, _position.y);
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeople3.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.beginPath();
        FlyingPeople3.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeople3.crc2.fillStyle = "HSLA(84, 78%, 51%, 1)";
        FlyingPeople3.crc2.fill();
        FlyingPeople3.crc2.closePath();
        FlyingPeople3.crc2.restore();
    }
    FlyingPeople3.drawTree4 = drawTree4;
})(FlyingPeople3 || (FlyingPeople3 = {}));
//# sourceMappingURL=background.js.map