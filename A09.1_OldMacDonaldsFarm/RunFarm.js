"use strict";
var OMDF;
(function (OMDF) {
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector("canvas");
    OMDF.crc2 = canvas.getContext("2d");
    OMDF.chicken = new OMDF.Animal("chicken", "bock", "yellow", 1);
    OMDF.cow = new OMDF.Animal("cow", "muh", "grass", 3);
    OMDF.dog = new OMDF.Animal("dog", "wuf", "meat", 2);
    OMDF.donkey = new OMDF.Animal("donkey", "ehah", "stroh", 2);
    OMDF.pig = new OMDF.Animal("pig", "oink", "brown", 3);
    let food = new OMDF.Food(10, OMDF.crc2);
    let foodDog = new OMDF.Food(10, OMDF.crc2);
    let foodPig = new OMDF.Food(10, OMDF.crc2);
    let foodCow = new OMDF.Food(10, OMDF.crc2);
    let foodChicken = new OMDF.Food(10, OMDF.crc2);
    let foodDonkey = new OMDF.Food(10, OMDF.crc2);
    function handleLoad(_event) {
        drawBackground();
        OMDF.chicken.drawChicken();
        OMDF.cow.drawCow();
        OMDF.dog.drawDog();
        OMDF.donkey.drawDonkey();
        OMDF.pig.drawPig();
        drawWall();
        food.drawManger();
        foodDog.drawFood(3, 4, 5, 6, "#7d6f4f", "#8a7850", "#a39167", "#b59f6d");
        foodCow.drawFood(22, 23, 24, 25, "#1d4727", "#1a4f27", "#155224", "#31633d");
        foodPig.drawFood(41, 42, 43, 44, "#6e5b46", "#4a3926", "#362818", "#574531");
        foodChicken.drawFood(61, 62, 63, 64, "#c7a22a", "#c7a228", "#d1aa2a", "#c79f1e");
        foodDonkey.drawFood(82, 83, 84, 85, "#93a646", "#8a9950", "#7e8a4e", "#778a2b");
    }
    document.addEventListener("click", Song);
    let i = 0;
    function Song() {
        if (i < 1) {
            console.log("Old MacDonald had a farm, E-I-E-I-O");
            console.log("And on that farm he had a dog, E-I-E-I-O.");
            console.log("With a ");
            console.log("Dog: " + OMDF.dog.sound + " " + OMDF.dog.sound);
            console.log("here,");
            console.log("and a");
            console.log("Dog: " + OMDF.dog.sound + " " + OMDF.dog.sound);
            console.log("there.");
            console.log("Here a ");
            console.log("Dog: " + OMDF.dog.sound);
            console.log("there a ");
            console.log("Dog: " + OMDF.dog.sound);
            console.log("Everywhere a ");
            console.log("Dog: " + OMDF.dog.sound + " " + OMDF.dog.sound);
            console.log("Old MacDonald had a farm, E-I-E-I-O.");
            food.eat(OMDF.dog);
            i++;
            return;
        }
        if (i < 2) {
            console.log("Old MacDonald had a farm, E-I-E-I-O");
            console.log("And on that farm he had a dog, E-I-E-I-O.");
            console.log("With a ");
            console.log("Dog: " + OMDF.dog.sound + " " + OMDF.dog.sound);
            console.log("here,");
            console.log("and a");
            console.log("Dog: " + OMDF.dog.sound + " " + OMDF.dog.sound);
            console.log("there.");
            console.log("Here a ");
            console.log("Dog: " + OMDF.dog.sound);
            console.log("there a ");
            console.log("Dog: " + OMDF.dog.sound);
            console.log("Everywhere a ");
            console.log("Dog: " + OMDF.dog.sound + " " + OMDF.dog.sound);
            console.log("Old MacDonald had a farm, E-I-E-I-O.");
            food.eat(OMDF.cow);
            i++;
            return;
        }
        if (i < 3) {
            console.log("");
            food.eat(OMDF.pig);
            i++;
            return;
        }
        if (i < 4) {
            console.log("");
            food.eat(OMDF.chicken);
            i++;
            return;
        }
        if (i < 5) {
            console.log("");
            food.eat(OMDF.donkey);
            i++;
            return;
        }
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