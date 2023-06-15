"use strict";
var FlyingPeople3;
(function (FlyingPeople3) {
    class bumblebees {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new FlyingPeople3.Vector(Math.random() * FlyingPeople3.crc2.canvas.width, Math.random() * FlyingPeople3.crc2.canvas.height);
            this.velocity = new FlyingPeople3.Vector(50, 0);
            this.velocity.randomize(120, 20);
        }
        move(_timeslice) {
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
//# sourceMappingURL=bee.js.map