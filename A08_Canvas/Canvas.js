"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        // if (!Canvas)
        console.log("canvas not working");
        //return; 
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawCircle({ x: -200, y: 150 }, { x: 70, y: 210 });
        drawT2({ x: 500, y: 125 }, { x: 550, y: -110 });
        drawElipse();
        putText();
        drawT1();
    }
    function drawBackground(_position, _size) {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        let x = Math.floor(Math.random() * (250 - 20 + 1) + 20);
        let y = Math.floor(Math.random() * (200 - 20 + 1) + 20);
        for (let i = 0; i < 8; i++) {
            crc2.beginPath();
            crc2.clearRect(x, y, 25, 25);
            crc2.strokeRect(250, y, 10, 10);
            crc2.fill();
            crc2.closePath();
        }
    }
    function drawT2(_position, _size) {
        console.log("T2");
        let nParticles = 40;
        let particle = new Path2D();
        let radiusParticle = 8;
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(1, "lightblue");
        gradient.addColorStop(0, "HSLA(60, 100%, 50%, 0)");
        gradient.addColorStop(0.5, "HSLA(60, 100%, 50%, 0)");
        crc2.fillStyle = gradient;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
        for (let drawn = 0; drawn < nParticles; drawn++) {
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.save();
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
    }
    ;
    function drawElipse() {
        console.log("T3");
        let a = Math.floor(Math.random() * 20);
        let b = Math.floor(Math.random() * 40);
        crc2.beginPath();
        crc2.ellipse(230, 80, a, b, Math.PI / 6, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(0, 200);
        crc2.lineTo(500, 300);
        crc2.stroke();
        //  crc2.fillStyle = crc2.createPattern(crc2.canvas, 'repeat')!;
    }
    function drawCircle(_position, _size) {
        for (let i = 0; i < 500; i++) {
            let x = Math.floor(Math.random() * _size.x);
            let y = Math.floor(Math.random() * _size.y);
            let radius = Math.floor(Math.random() * 15);
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            crc2.beginPath();
            crc2.arc(x, y, radius, Math.PI * 2, 0, false);
            crc2.fillStyle = "rgba(" + r + "," + g + "," + b + ",1)";
            crc2.fill();
            crc2.closePath();
        }
    }
    function putText() {
        let x1 = Math.floor(Math.random() * (100 - 20 + 1) + 20);
        let y1 = Math.floor(Math.random() * (100 - 20 + 1) + 20);
        let x = Math.floor(Math.random() * (100 - 20 + 1) + 20);
        let y = Math.floor(Math.random() * (100 - 20 + 1) + 20);
        crc2.fillStyle = "#00BFFF";
        crc2.fillText("Hello there", x1, y1);
        crc2.strokeText("...here we are again", x, y);
    }
    function drawT1() {
        console.log("T1");
        var x = Math.floor(Math.random() * 250);
        let y = Math.floor(Math.random() * 150);
        let o = Math.floor(Math.random() * (350 - 20 + 1) + 20);
        let one = Math.floor(Math.random() * (40 - 20 + 1) + 20);
        let two = Math.floor(Math.random() * (40 - 20 + 1) + 20);
        crc2.setTransform(1, 0.2, 0.8, 1, 0, 0);
        crc2.fillRect(x, y, 40, 40);
        let storedTransform = crc2.getTransform();
        crc2.setTransform(storedTransform);
        crc2.beginPath();
        crc2.rotate(o * Math.PI / 180);
        crc2.scale(one, two);
        crc2.fillRect(x, y, 40, 40);
        crc2.resetTransform();
        crc2.closePath();
        crc2.stroke();
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map