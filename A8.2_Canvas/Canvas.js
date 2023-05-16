"use strict";
/*
Aufgabe: <Aufgabe 8.2 Canvas>
Name: <Judith Pauler>
Matrikel: <272240>
Datum: <11.05.23>
Quellen: <Madeleine Hansen>
*/
var CanvasA2;
(function (CanvasA2) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        // if (!Canvas)
        console.log("canvas not working");
        //return; 
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawMountains();
        drawClouds();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawMountains() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightgray");
        gradient.addColorStop(0.8, "gray");
        crc2.beginPath(); // small mountains
        crc2.moveTo(-20, 170);
        crc2.lineTo(40, 30);
        crc2.lineTo(90, 130);
        crc2.lineTo(160, 50);
        crc2.lineTo(220, 130);
        crc2.lineTo(300, 30);
        crc2.lineTo(350, 130);
        crc2.lineTo(450, 50);
        crc2.lineTo(550, 110);
        crc2.lineTo(620, 40);
        crc2.lineTo(680, 110);
        crc2.lineTo(750, 30);
        crc2.lineTo(820, 170);
        crc2.closePath();
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = "darkgray";
        crc2.fill();
    }
    function drawClouds() {
        let particle = new Path2D();
        let radiusParticle = 8;
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(1, "blue");
        gradient.addColorStop(0, "HSLA(60, 100%, 50%, 0)");
        crc2.fillStyle = gradient;
        let x = 50;
        let y = 50;
        crc2.translate(x, y);
        crc2.save();
        crc2.fill(particle);
        crc2.stroke();
        crc2.restore();
    }
})(CanvasA2 || (CanvasA2 = {}));
//# sourceMappingURL=Canvas.js.map