"use strict";
/*
Aufgabe: <Aufgabe 9.2 Canvas>
Name: <Judith Pauler>
Matrikel: <272240>
Datum: <01.06.23>
Quellen: <Madeleine Hansen>
*/
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleLoad);
    Canvas.x = 50;
    Canvas.y = 80;
    Canvas.particle = new Path2D();
    Canvas.canvas = document.querySelector("canvas");
    function handleLoad(_event) {
        console.log("canvas not working");
        Canvas.crc2 = Canvas.canvas.getContext("2d");
        let drawc = new Canvas.background;
        let newBee = new Canvas.bee;
        let newHuman = new Canvas.human;
        drawc.drawBackground();
        drawc.drawMountains();
        drawc.drawClouds();
        drawc.drawBigMountains();
        drawc.drawHouse();
        drawc.drawTree();
        drawc.drawLanding();
        drawc.drawSun();
        newHuman.flying({ x: 0, y: 0 }, { x: -400, y: 250 }, "#b30000");
        newHuman.flying({ x: 0, y: 0 }, { x: -750, y: 150 }, "#8a0a2a");
        newHuman.flying({ x: 0, y: 0 }, { x: -250, y: 150 }, "#b85f00");
        newHuman.flying({ x: 0, y: 0 }, { x: -100, y: 250 }, "#d9af25");
        newHuman.human({ x: -300, y: 650 }, "red");
        newHuman.human({ x: -260, y: 640 }, "purple");
        newHuman.human({ x: -250, y: 660 }, "blue");
        newHuman.human({ x: -750, y: 660 }, "#3275a8");
        newHuman.human({ x: -80, y: 610 }, "#4ab1b5");
        newHuman.human({ x: -40, y: 620 }, "#614ab5");
        drawc.windThing();
        newBee.drawBee(-300, 400);
        newBee.drawBee(-500, 300);
        newBee.drawBee(-400, 200);
    }
    ;
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map