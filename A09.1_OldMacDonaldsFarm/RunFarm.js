"use strict";
var OMDF;
(function (OMDF) {
    window.addEventListener("load", handleLoad);
    let dog = new OMDF.Dog();
    let cow = new OMDF.Cow();
    let pig = new OMDF.Pig();
    let chicken = new OMDF.Chicken();
    let donkey = new OMDF.Donkey();
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        console.log("canvas not working");
        OMDF.crc2 = canvas.getContext("2d");
        drawBackground();
        dog.drawDog();
        cow.drawCow();
        pig.drawPig();
        chicken.drawChicken();
        donkey.drawDonkey();
        drawWall();
    }
    ;
    function drawBackground() {
        let gradient = OMDF.crc2.createLinearGradient(0, 0, 0, OMDF.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "white");
        OMDF.crc2.fillStyle = gradient;
        OMDF.crc2.fillRect(0, 0, OMDF.crc2.canvas.width, OMDF.crc2.canvas.height);
    }
    ;
    function drawWall() {
        OMDF.crc2.fillStyle = "#262626";
        OMDF.crc2.fillRect(0, 290, OMDF.crc2.canvas.width, 250);
    }
})(OMDF || (OMDF = {}));
//# sourceMappingURL=RunFarm.js.map