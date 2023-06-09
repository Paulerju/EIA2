"use strict";
/*
Aufgabe: <Aufgabe 9.1 OldMacDonalds>
Name: <Judith Pauler>
Matrikel: <272240>
Datum: <20.05.23>
Quellen: <Madeleine Hansen>
*/
var OMDF2;
(function (OMDF2) {
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector("canvas");
    OMDF2.crc2 = canvas.getContext("2d");
    OMDF2.chicken = new OMDF2.Animal("chicken", "bock", "yellow", 1);
    OMDF2.cow = new OMDF2.Animal("cow", "muh", "grass", 3);
    OMDF2.dog = new OMDF2.Animal("dog", "wuf", "meat", 2);
    OMDF2.donkey = new OMDF2.Animal("donkey", "ehah", "stroh", 2);
    OMDF2.pig = new OMDF2.Animal("pig", "oink", "brown", 3);
    let food = new OMDF2.Food(10, OMDF2.crc2);
    let foodDog = new OMDF2.Food(10, OMDF2.crc2);
    let foodPig = new OMDF2.Food(10, OMDF2.crc2);
    let foodCow = new OMDF2.Food(10, OMDF2.crc2);
    let foodChicken = new OMDF2.Food(10, OMDF2.crc2);
    let foodDonkey = new OMDF2.Food(10, OMDF2.crc2);
    function handleLoad(_event) {
        drawBackground();
        OMDF2.chicken.drawChicken();
        OMDF2.cow.drawCow();
        OMDF2.dog.drawDog();
        OMDF2.donkey.drawDonkey();
        OMDF2.pig.drawPig();
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
            console.log("Dog: " + OMDF2.dog.sound + " " + OMDF2.dog.sound);
            console.log("here,");
            console.log("and a");
            console.log("Dog: " + OMDF2.dog.sound + " " + OMDF2.dog.sound);
            console.log("there.");
            console.log("Here a ");
            console.log("Dog: " + OMDF2.dog.sound);
            console.log("there a ");
            console.log("Dog: " + OMDF2.dog.sound);
            console.log("Everywhere a ");
            console.log("Dog: " + OMDF2.dog.sound + " " + OMDF2.dog.sound);
            console.log("Old MacDonald had a farm, E-I-E-I-O.");
            food.eat(OMDF2.dog);
            i++;
            return;
        }
        if (i < 2) {
            console.log("Old MacDonald had a farm, E-I-E-I-O");
            console.log("And on that farm he had a cow, E-I-E-I-O.");
            console.log("With a ");
            console.log("Cow: " + OMDF2.cow.sound + " " + OMDF2.cow.sound);
            console.log("here,");
            console.log("and a");
            console.log("Cow: " + OMDF2.cow.sound + " " + OMDF2.cow.sound);
            console.log("there.");
            console.log("Here a ");
            console.log("Cow: " + OMDF2.cow.sound);
            console.log("there a ");
            console.log("Cow: " + OMDF2.cow.sound);
            console.log("Everywhere a ");
            console.log("Cow: " + OMDF2.cow.sound + " " + OMDF2.cow.sound);
            console.log("Old MacDonald had a farm, E-I-E-I-O.");
            food.eat(OMDF2.cow);
            i++;
            return;
        }
        if (i < 3) {
            console.log("Old MacDonald had a farm, E-I-E-I-O");
            console.log("And on that farm he had a cow, E-I-E-I-O.");
            console.log("With a ");
            console.log("Pig: " + OMDF2.pig.sound + " " + OMDF2.pig.sound);
            console.log("here,");
            console.log("and a");
            console.log("Pig: " + OMDF2.pig.sound + " " + OMDF2.pig.sound);
            console.log("there.");
            console.log("Here a ");
            console.log("Pig: " + OMDF2.pig.sound);
            console.log("there a ");
            console.log("Pig: " + OMDF2.pig.sound);
            console.log("Everywhere a ");
            console.log("Pig: " + OMDF2.pig.sound + " " + OMDF2.pig.sound);
            console.log("Old MacDonald had a farm, E-I-E-I-O.");
            food.eat(OMDF2.pig);
            i++;
            return;
        }
        if (i < 4) {
            console.log("Old MacDonald had a farm, E-I-E-I-O");
            console.log("And on that farm he had a cow, E-I-E-I-O.");
            console.log("With a ");
            console.log("Chicken: " + OMDF2.chicken.sound + " " + OMDF2.chicken.sound);
            console.log("here,");
            console.log("and a");
            console.log("Chicken: " + OMDF2.chicken.sound + " " + OMDF2.chicken.sound);
            console.log("there.");
            console.log("Here a ");
            console.log("Chicken: " + OMDF2.chicken.sound);
            console.log("there a ");
            console.log("Chicken: " + OMDF2.chicken.sound);
            console.log("Everywhere a ");
            console.log("Chicken: " + OMDF2.chicken.sound + " " + OMDF2.chicken.sound);
            console.log("Old MacDonald had a farm, E-I-E-I-O.");
            food.eat(OMDF2.chicken);
            i++;
            return;
        }
        if (i < 5) {
            console.log("Old MacDonald had a farm, E-I-E-I-O");
            console.log("And on that farm he had a cow, E-I-E-I-O.");
            console.log("With a ");
            console.log("Donkey: " + OMDF2.donkey.sound + " " + OMDF2.donkey.sound);
            console.log("here,");
            console.log("and a");
            console.log("Donkey: " + OMDF2.donkey.sound + " " + OMDF2.donkey.sound);
            console.log("there.");
            console.log("Here a ");
            console.log("Donkey: " + OMDF2.donkey.sound);
            console.log("there a ");
            console.log("Donkey: " + OMDF2.donkey.sound);
            console.log("Everywhere a ");
            console.log("Donkey: " + OMDF2.donkey.sound + " " + OMDF2.donkey.sound);
            console.log("Old MacDonald had a farm, E-I-E-I-O.");
            food.eat(OMDF2.donkey);
            i++;
            return;
        }
    }
    function drawBackground() {
        let gradient = OMDF2.crc2.createLinearGradient(0, 0, 0, OMDF2.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "white");
        OMDF2.crc2.fillStyle = gradient;
        OMDF2.crc2.fillRect(0, 0, OMDF2.crc2.canvas.width, OMDF2.crc2.canvas.height);
    }
    ;
    function drawWall() {
        OMDF2.crc2.fillStyle = "#262626";
        OMDF2.crc2.fillRect(0, 290, OMDF2.crc2.canvas.width, 250);
    }
})(OMDF2 || (OMDF2 = {}));
//# sourceMappingURL=RunFarm.js.map