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
        drawBigMountains();
        drawHouse();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.12, "lightblue");
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawMountains() {
        let gradient = crc2.createLinearGradient(100, 50, 100, 250);
        gradient.addColorStop(0, "lightgray");
        gradient.addColorStop(1, "gray");
        crc2.beginPath(); // small mountains
        crc2.moveTo(-100, 335);
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
        crc2.lineTo(900, 330);
        crc2.closePath();
        crc2.strokeStyle = '#d9ddde';
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    let x = 50;
    let y = 80;
    let particle = new Path2D();
    function draw1() {
        crc2.translate(x, y);
        crc2.save();
        crc2.fill(particle);
        crc2.stroke();
        crc2.restore();
    }
    function drawClouds() {
        let radiusParticle = 20;
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(1, "HSLA(196, 100%, 95%, 0.8)");
        crc2.fillStyle = gradient;
        draw1();
        x = -10;
        y = 7;
        draw1();
        y = 0;
        draw1();
        x = 100;
        draw1();
        x = 20;
        y = 10;
        draw1();
        x = 20;
        y = 0;
        draw1();
        x = 20;
        y = -5;
        draw1();
        x = 70;
        y = 5;
        draw1();
        x = 20;
        y = 5;
        draw1();
        x = 20;
        y = -8;
        draw1();
        x = 20;
        y = 8;
        draw1();
        x = 80;
        y = -10;
        draw1();
        x = 20;
        y = 8;
        draw1();
        x = 20;
        y = -8;
        draw1();
        x = 20;
        y = -2;
        draw1();
        x = 25;
        y = -2;
        draw1();
        x = 20;
        y = 0;
        draw1();
        x = 70;
        y = 10;
        draw1();
        x = 20;
        y = 5;
        draw1();
        x = 20;
        y = -5;
        draw1();
        x = 20;
        y = -5;
        draw1();
        x = 20;
        y = 5;
        draw1();
        x = 60;
        y = -25;
        draw1();
        x = 20;
        y = 5;
        draw1();
        x = 20;
        y = 10;
        draw1();
        x = 20;
        y = -5;
        draw1();
    }
    function drawBigMountains() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightgray");
        gradient.addColorStop(0.8, "gray");
        crc2.beginPath();
        crc2.moveTo(-130, 10);
        crc2.lineTo(250, 350);
        crc2.lineTo(-920, 350);
        crc2.lineTo(-680, 10);
        crc2.lineTo(-500, 250);
        crc2.lineTo(-300, 10);
        crc2.lineTo(-200, 100);
        crc2.closePath();
        crc2.strokeStyle = '#d9ddde';
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = "grey";
        crc2.fill();
    }
    function drawHouse() {
        crc2.beginPath();
        crc2.rect(-250, 500, 150, 150);
        crc2.fillStyle = "blue";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.rect(-275, 500, 200, 20);
        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.fill();
    }
    function drawLanding() {
    }
})(CanvasA2 || (CanvasA2 = {}));
//# sourceMappingURL=Canvas.js.map