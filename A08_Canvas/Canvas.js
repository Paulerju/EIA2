"use strict";
var Canvas;
(function (Canvas_1) {
    window.addEventListener("load", handleLoad);
    let crc2;
    drawT2(50, 20);
    function handleLoad(_event) {
        let Canvas = document.querySelector("canvas");
        if (!Canvas)
            return;
        crc2 = Canvas.getContext("2d");
        drawBackground();
        drawT1({ x: 50, y: 50 });
        drawT2({ x: 500, y: 125 }, { x: 250, y: 75 });
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawT1(_position) {
        console.log("T1");
        let r1 = 20;
        let r2 = 40;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawT2(_position, _size) {
        console.log("T2");
        let nParticles = 15;
        let particle = new Path2D();
        let radiusParticle = 20;
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0,100%,100%,0.5)");
        gradient.addColorStop(1, "HSLA(0,100%,100%,0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
        }
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map