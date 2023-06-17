"use strict";
var FlyingPeople3;
(function (FlyingPeople3) {
    /*
 Aufgabe: <L08.2 Artpiece>
 Name: <Laura Kupferschmid>
 Matrikel: <272613>
 Datum: <25.05.23>
 Quellen: <Laura Kupfeschid, Madelein Hansen>
 */
    window.addEventListener('load', handleload);
    FlyingPeople3.goldy = 0.62;
    FlyingPeople3.canvas = document.querySelector("canvas");
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        FlyingPeople3.crc2 = canvas.getContext("2d");
        FlyingPeople3.horizon = FlyingPeople3.crc2.canvas.height * FlyingPeople3.goldy;
        FlyingPeople3.drawBackground();
        FlyingPeople3.drawMountains(new FlyingPeople3.Vector(FlyingPeople3.horizon, 70));
        FlyingPeople3.drawSunny(new FlyingPeople3.Vector(100, 70));
        FlyingPeople3.drawCloud(new FlyingPeople3.Vector(500, 175), new FlyingPeople3.Vector(250, 75));
        FlyingPeople3.drawTriangle(new FlyingPeople3.Vector(0, 400));
        FlyingPeople3.drawLandingCircle(new FlyingPeople3.Vector(200, 400), 500, 30), new FlyingPeople3.Vector(190, 30);
        FlyingPeople3.drawShack(new FlyingPeople3.Vector(700, 550));
        FlyingPeople3.drawWindSock(new FlyingPeople3.Vector(380, 500));
        FlyingPeople3.drawTree(new FlyingPeople3.Vector(90, 190));
        FlyingPeople3.drawTree1(new FlyingPeople3.Vector(400, 190));
        FlyingPeople3.drawTree2(new FlyingPeople3.Vector(440, 190));
        FlyingPeople3.drawTree3(new FlyingPeople3.Vector(360, 190));
        FlyingPeople3.drawTree4(new FlyingPeople3.Vector(330, 190));
        FlyingPeople3.imgData = FlyingPeople3.crc2.getImageData(0, 0, FlyingPeople3.crc2.canvas.width, FlyingPeople3.crc2.canvas.height);
        console.log(FlyingPeople3.horizon);
        FlyingPeople3.crc2.putImageData(FlyingPeople3.imgData, 0, 0);
        animateFlyingPerson();
        createFlyingPerson();
        window.setInterval(animateFlyingPerson, 1000);
        createBumbleBee();
        window.setInterval(animateBumblebee, 1);
    }
    let AllFlying = [];
    //let FlyingPerson: paraglider[] = [];
    // let insectArray: bumblebees[] = [];
    console.log(AllFlying);
    FlyingPeople3.landingzone = new FlyingPeople3.Vector(400, 500);
    FlyingPeople3.hikingzone = new FlyingPeople3.Vector(0, 440);
    FlyingPeople3.flystart = new FlyingPeople3.Vector(50, 150);
    function createFlyingPerson() {
        for (let iFlyingPerson = 0; iFlyingPerson < 10; iFlyingPerson++) {
            let paraglideri = new FlyingPeople3.FlyingObject(new FlyingPeople3.Vector(400, 50), new FlyingPeople3.Vector(30, 150), "flying");
            AllFlying.push(paraglideri);
            console.log(paraglideri);
            console.log(AllFlying);
        }
    }
    function animateFlyingPerson() {
        FlyingPeople3.crc2.clearRect(0, 0, 1000, 600);
        FlyingPeople3.crc2.putImageData(FlyingPeople3.imgData, 0, 0);
        for (let paraglideri of AllFlying) {
            paraglideri.doActivity(1 / 50);
            paraglideri.draw(2);
            window.setInterval(animateFlyingPerson, 10);
        }
    }
    function createBumbleBee() {
        FlyingPeople3.crc2.clearRect(0, 0, 1000, 600);
        FlyingPeople3.crc2.putImageData(FlyingPeople3.imgData, 0, 0);
        for (let i = 0; i < 5; i++) {
            let bumblebee = new FlyingPeople3.bumblebees(new FlyingPeople3.Vector(200, 80), new FlyingPeople3.Vector(20, -200), "walking");
            AllFlying.push(bumblebee);
        }
    }
    function animateBumblebee() {
        for (let bumblebee of AllFlying) {
            bumblebee.doActivity(1 / 50);
            bumblebee.draw(0);
        }
    }
})(FlyingPeople3 || (FlyingPeople3 = {}));
//# sourceMappingURL=script.js.map