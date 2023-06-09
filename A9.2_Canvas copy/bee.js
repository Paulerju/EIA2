"use strict";
var FlyingPeople;
(function (FlyingPeople) {
    class bumblebees {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new FlyingPeople.Vector(Math.random() * FlyingPeople.crc2.canvas.width, Math.random() * FlyingPeople.crc2.canvas.height);
            this.velocity = new FlyingPeople.Vector(50, 0);
            this.velocity.randomize(120, 20);
        }
        move(_timeslice) {
            let offset = new FlyingPeople.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += FlyingPeople.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += FlyingPeople.crc2.canvas.height;
            if (this.position.x > FlyingPeople.crc2.canvas.width)
                this.position.x -= FlyingPeople.crc2.canvas.width;
            if (this.position.y > FlyingPeople.crc2.canvas.height)
                this.position.y -= FlyingPeople.crc2.canvas.height;
        }
        draw() {
            console.log("Bee1");
            FlyingPeople.crc2.save();
            FlyingPeople.crc2.translate(this.position.x, this.position.y);
            let grd = FlyingPeople.crc2.createLinearGradient(2, 3, 6, 8);
            grd.addColorStop(0, "yellow");
            grd.addColorStop(1, "black");
            grd.addColorStop(1, "yellow");
            FlyingPeople.crc2.beginPath();
            FlyingPeople.crc2.ellipse(-2, -10, 8, 2, 80, -2, 2 * Math.PI);
            FlyingPeople.crc2.fillStyle = "white";
            FlyingPeople.crc2.fill();
            FlyingPeople.crc2.beginPath();
            FlyingPeople.crc2.ellipse(0, 0, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
            FlyingPeople.crc2.fillStyle = grd;
            FlyingPeople.crc2.fill();
            FlyingPeople.crc2.beginPath();
            FlyingPeople.crc2.ellipse(2, -9, 8, 2, -80, 20, 2 * Math.PI);
            FlyingPeople.crc2.fillStyle = "lightgrey";
            FlyingPeople.crc2.fill();
            FlyingPeople.crc2.restore();
        }
        ;
    }
    FlyingPeople.bumblebees = bumblebees;
})(FlyingPeople || (FlyingPeople = {}));
//# sourceMappingURL=bee.js.map