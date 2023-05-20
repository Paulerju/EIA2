"use strict";
var OMDF;
(function (OMDF) {
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector("canvas");
    OMDF.crc2 = canvas.getContext("2d");
    let chicken = new OMDF.Animal("chicken", "bock", "yellow", 1);
    let cow = new OMDF.Animal("cow", "muh", "grass", 3);
    let dog = new OMDF.Animal("dog", "wuf", "meat", 2);
    let donkey = new OMDF.Animal("donkey", "ehah", "stroh", 2);
    let pig = new OMDF.Animal("pig", "oink", "brown", 3);
    let food = new OMDF.Food(10, OMDF.crc2);
    let foodDog = new OMDF.Food(10, OMDF.crc2);
    let foodPig = new OMDF.Food(10, OMDF.crc2);
    let foodCow = new OMDF.Food(10, OMDF.crc2);
    let foodChicken = new OMDF.Food(10, OMDF.crc2);
    let foodDonkey = new OMDF.Food(10, OMDF.crc2);
    function handleLoad(_event) {
        drawBackground();
        chicken.drawChicken();
        cow.drawCow();
        dog.drawDog();
        donkey.drawDonkey();
        pig.drawPig();
        drawWall();
        food.drawManger();
        foodDog.drawFood(3, 4, 5, 6, "#7d6f4f", "#8a7850", "#a39167", "#b59f6d");
        foodPig.drawFood(22, 23, 24, 25, "#1d4727", "#1a4f27", "#155224", "#31633d");
        foodCow.drawFood(41, 42, 43, 44, "#6e5b46", "#4a3926", "#362818", "#574531");
        foodChicken.drawFood(61, 62, 63, 64, "#c7a22a", "#c7a228", "#d1aa2a", "#c79f1e");
        foodDonkey.drawFood(82, 83, 84, 85, "#93a646", "#8a9950", "#7e8a4e", "#778a2b");
    }
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