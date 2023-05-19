"use strict";
var OMDF;
(function (OMDF) {
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector("canvas");
    OMDF.crc2 = canvas.getContext("2d");
    let dog = new OMDF.Dog();
    let cow = new OMDF.Cow();
    let pig = new OMDF.Pig();
    let chicken = new OMDF.Chicken();
    let donkey = new OMDF.Donkey();
    let food = new OMDF.Food(10, OMDF.crc2);
    let foodDog = new OMDF.Food(10, OMDF.crc2);
    let foodPig = new OMDF.Food(10, OMDF.crc2);
    let foodCow = new OMDF.Food(10, OMDF.crc2);
    let foodChicken = new OMDF.Food(10, OMDF.crc2);
    let foodDonkey = new OMDF.Food(10, OMDF.crc2);
    function handleLoad(_event) {
        drawBackground();
        dog.drawDog();
        cow.drawCow();
        pig.drawPig();
        chicken.drawChicken();
        donkey.drawDonkey();
        drawWall();
        food.drawManger();
        foodDog.drawFood(3, 4, 5, 6, "#7d6f4f", "#8a7850", "#a39167", "#b59f6d");
        foodPig.drawFood(22, 23, 24, 25, "#1d4727", "#1a4f27", "#155224", "#31633d");
        foodCow.drawFood(41, 42, 43, 44, "#6e5b46", "#4a3926", "#362818", "#574531");
        foodChicken.drawFood(61, 62, 63, 64, "#c7a22a", "#c7a228", "#d1aa2a", "#c79f1e");
        foodDonkey.drawFood(82, 83, 84, 85, "#93a646", "#8a9950", "#7e8a4e", "#778a2b");
        typeText("Old Mac Donalds had a farm, and on his farm he had some cows, with a ", () => {
            cow.talk("moo-moo", () => {
                typeText(" here and a ", () => {
                    cow.talk("moo-moo", () => {
                        typeText(" there. Here a ", () => {
                            cow.talk("mo", () => {
                                typeText(" there a ", () => {
                                    cow.talk("mo", () => {
                                        typeText(" Everywhere a moo-moo");
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
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
    function typeText(_text, callback) {
        const text = _text;
        const delay = 100;
        let currentCharIndex = 0;
        function drawText() {
            OMDF.crc2.fillText(text.substring(0, currentCharIndex), 10, 50);
        }
        function typeNextChar() {
            if (currentCharIndex < text.length) {
                drawText();
                currentCharIndex++;
                setTimeout(typeNextChar, delay);
                if (callback) {
                    callback();
                }
            }
        }
        typeNextChar();
    }
})(OMDF || (OMDF = {}));
//# sourceMappingURL=RunFarm.js.map