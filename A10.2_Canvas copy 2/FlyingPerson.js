"use strict";
var FlyingPeople3;
(function (FlyingPeople3) {
    class FlyingObject {
        position;
        velocity;
        constructor(_velocity, _position, _activity) {
            this.velocity = new FlyingPeople3.Vector(50, 0);
            this.velocity.randomize(120, 20);
            this.velocity = _velocity;
            this.position = new FlyingPeople3.Vector(150, 20);
            this.position = _position;
        }
        doActivity(_timeslice) {
        }
        draw(_timeslice) {
        }
    }
    FlyingPeople3.FlyingObject = FlyingObject;
    class paraglider extends FlyingObject {
        activity;
        getRandomNumber(_max, _min = 0) {
            return Math.floor(Math.random() * _max) + _min;
        }
        changeColor() {
            const intensity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
            let randomColor1 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor2 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor3 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor4 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor5 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor6 = intensity[Math.floor(Math.random() * intensity.length)];
            const randomColor = `#${randomColor1}${randomColor2}${randomColor3}${randomColor4}${randomColor5}${randomColor6}`;
            FlyingPeople3.crc2.fillStyle = "randomColor";
            return randomColor;
        }
        draw() {
            if (this.activity = "flying") {
                //Schirm
                FlyingPeople3.crc2.beginPath();
                FlyingPeople3.crc2.fillStyle = this.changeColor();
                FlyingPeople3.crc2.fillRect(this.position.x, this.position.y, 10, 16);
                FlyingPeople3.crc2.fillStyle = this.changeColor();
                FlyingPeople3.crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                FlyingPeople3.crc2.closePath();
                FlyingPeople3.crc2.beginPath();
                FlyingPeople3.crc2.moveTo(this.position.x, this.position.y);
                FlyingPeople3.crc2.lineTo(this.position.x - 20, this.position.y - 20);
                FlyingPeople3.crc2.lineTo(this.position.x + 30, this.position.y - 30);
                FlyingPeople3.crc2.stroke();
                FlyingPeople3.crc2.fillStyle = this.changeColor();
                FlyingPeople3.crc2.fill();
                FlyingPeople3.crc2.closePath();
            }
            if (this.activity = "walking") {
                //Kein Schirm
                FlyingPeople3.crc2.beginPath();
                FlyingPeople3.crc2.fillStyle = this.changeColor();
                FlyingPeople3.crc2.fillRect(this.position.x, this.position.y, 10, 16);
                FlyingPeople3.crc2.fillStyle = this.changeColor();
                FlyingPeople3.crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                FlyingPeople3.crc2.closePath();
            }
            if (this.activity = "climbing") {
                //KeinSchirm
                FlyingPeople3.crc2.beginPath();
                FlyingPeople3.crc2.fillStyle = this.changeColor();
                FlyingPeople3.crc2.fillRect(this.position.x, this.position.y, 10, 16);
                FlyingPeople3.crc2.fillStyle = this.changeColor();
                FlyingPeople3.crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                FlyingPeople3.crc2.closePath();
            }
        }
        ;
        doActivity(_timeslice) {
            let offset = new FlyingPeople3.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            this.activity = "flying";
            let y_ground = new FlyingPeople3.Vector(200, 500);
            if (FlyingPeople3.flystart > y_ground) {
                this.activity = "walking";
                this.position.x += FlyingPeople3.crc2.canvas.width;
            }
            if (FlyingPeople3.hikingzone) {
                this.position.x -= FlyingPeople3.crc2.canvas.width;
                this.activity = "climbing";
            }
            if (FlyingPeople3.flystart) {
                this.position.y += FlyingPeople3.crc2.canvas.height;
                this.activity = "flying";
            }
        }
    }
    FlyingPeople3.paraglider = paraglider;
    class bumblebees extends FlyingObject {
        size;
        doActivity(_timeslice) {
            let offset = new FlyingPeople3.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += FlyingPeople3.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += FlyingPeople3.crc2.canvas.height;
            if (this.position.x > FlyingPeople3.crc2.canvas.width)
                this.position.x -= FlyingPeople3.crc2.canvas.width;
            if (this.position.y > FlyingPeople3.crc2.canvas.height)
                this.position.y -= FlyingPeople3.crc2.canvas.height;
        }
        draw() {
            console.log("Bee1");
            FlyingPeople3.crc2.save();
            FlyingPeople3.crc2.translate(this.position.x, this.position.y);
            let grd = FlyingPeople3.crc2.createLinearGradient(2, 3, 6, 8);
            grd.addColorStop(0, "yellow");
            grd.addColorStop(1, "black");
            grd.addColorStop(1, "yellow");
            FlyingPeople3.crc2.beginPath();
            FlyingPeople3.crc2.ellipse(-2, -10, 8, 2, 80, -2, 2 * Math.PI);
            FlyingPeople3.crc2.fillStyle = "white";
            FlyingPeople3.crc2.fill();
            FlyingPeople3.crc2.beginPath();
            FlyingPeople3.crc2.ellipse(0, 0, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
            FlyingPeople3.crc2.fillStyle = grd;
            FlyingPeople3.crc2.fill();
            FlyingPeople3.crc2.beginPath();
            FlyingPeople3.crc2.ellipse(2, -9, 8, 2, -80, 20, 2 * Math.PI);
            FlyingPeople3.crc2.fillStyle = "lightgrey";
            FlyingPeople3.crc2.fill();
            FlyingPeople3.crc2.restore();
        }
        ;
    }
    FlyingPeople3.bumblebees = bumblebees;
})(FlyingPeople3 || (FlyingPeople3 = {}));
//# sourceMappingURL=FlyingPerson.js.map