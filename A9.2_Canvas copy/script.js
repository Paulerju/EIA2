"use strict";
var FlyingPeople;
(function (FlyingPeople) {
    /*
 Aufgabe: <L08.2 Artpiece>
 Name: <Laura Kupferschmid>
 Matrikel: <272613>
 Datum: <25.05.23>
 Quellen: <Laura Kupfeschid, Madelein Hansen>
 */
    window.addEventListener('load', handleload);
    FlyingPeople.goldy = 0.62;
    FlyingPeople.canvas = document.querySelector("canvas");
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        FlyingPeople.crc2 = canvas.getContext("2d");
        FlyingPeople.horizon = FlyingPeople.crc2.canvas.height * FlyingPeople.goldy;
        FlyingPeople.drawBackground();
        FlyingPeople.drawMountains(new FlyingPeople.Vector(FlyingPeople.horizon, 70));
        FlyingPeople.drawSunny(new FlyingPeople.Vector(100, 70));
        FlyingPeople.drawCloud(new FlyingPeople.Vector(500, 175), new FlyingPeople.Vector(250, 75));
        FlyingPeople.drawTriangle(new FlyingPeople.Vector(0, 400));
        FlyingPeople.drawLandingCircle(new FlyingPeople.Vector(200, 400), 500, 30), new FlyingPeople.Vector(190, 30);
        FlyingPeople.drawShack(new FlyingPeople.Vector(700, 550));
        FlyingPeople.drawWindSock(new FlyingPeople.Vector(380, 500));
        FlyingPeople.drawTree(new FlyingPeople.Vector(90, 190));
        FlyingPeople.drawTree1(new FlyingPeople.Vector(400, 190));
        FlyingPeople.drawTree2(new FlyingPeople.Vector(440, 190));
        FlyingPeople.drawTree3(new FlyingPeople.Vector(360, 190));
        FlyingPeople.drawTree4(new FlyingPeople.Vector(330, 190));
        FlyingPeople.imgData = FlyingPeople.crc2.getImageData(0, 0, FlyingPeople.crc2.canvas.width, FlyingPeople.crc2.canvas.height);
        console.log(FlyingPeople.horizon);
        FlyingPeople.crc2.putImageData(FlyingPeople.imgData, 0, 0);
        animateFlyingPerson();
        createFlyingPerson();
        window.setInterval(animateFlyingPerson, 1000);
        createBumbleBee();
        window.setInterval(animateBumblebee, 1);
    }
    let FlyingPerson = [];
    let insectArray = [];
    console.log(FlyingPerson[5]);
    FlyingPeople.landingzone = new FlyingPeople.Vector(400, 500);
    FlyingPeople.hikingzone = new FlyingPeople.Vector(0, 440);
    FlyingPeople.flystart = new FlyingPeople.Vector(50, 150);
    function createFlyingPerson() {
        for (let iFlyingPerson = 0; iFlyingPerson < 10; iFlyingPerson++) {
            let paraglideri = new FlyingPeople.paraglider(new FlyingPeople.Vector(400, 500), new FlyingPeople.Vector(400, 500), "flying");
            FlyingPerson.push(paraglideri);
            console.log(paraglideri);
            console.log(FlyingPerson);
        }
    }
    function animateFlyingPerson() {
        FlyingPeople.crc2.clearRect(0, 0, 1000, 600);
        FlyingPeople.crc2.putImageData(FlyingPeople.imgData, 0, 0);
        for (let paraglideri of FlyingPerson) {
            paraglideri.move(1 / 50);
            paraglideri.draw(new FlyingPeople.Vector(150, 150), new FlyingPeople.Vector(10, 16));
            window.setInterval(animateFlyingPerson, 10);
        }
    }
    function createBumbleBee() {
        for (let i = 0; i < 5; i++) {
            let bumblebee = new FlyingPeople.bumblebees(0.5, new FlyingPeople.Vector(10, 0));
            insectArray.push(bumblebee);
        }
    }
    function animateBumblebee() {
        for (let bumblebee of insectArray) {
            bumblebee.move(1 / 50);
            bumblebee.draw();
        }
    }
})(FlyingPeople || (FlyingPeople = {}));
//# sourceMappingURL=script.js.map