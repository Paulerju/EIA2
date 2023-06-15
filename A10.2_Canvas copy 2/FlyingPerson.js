"use strict";
var FlyingPeople3;
(function (FlyingPeople3) {
    class paraglider {
        position;
        velocity;
        activity;
        constructor(_velocity, _position, _activity) {
            this.velocity = new FlyingPeople3.Vector(50, 0);
            this.velocity.randomize(120, 20);
            this.velocity = _velocity;
            this.position = new FlyingPeople3.Vector(150, 20);
            this.position = _position;
            this.activity = "flying";
            this.activity = _activity;
        }
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
        draw(_position, _size) {
            if (this.activity = "flying") {
                //Schirm
                FlyingPeople3.crc2.beginPath();
                FlyingPeople3.crc2.fillStyle = this.changeColor();
                FlyingPeople3.crc2.fillRect(_position.x, _position.y, 10, 16);
                FlyingPeople3.crc2.fillStyle = this.changeColor();
                FlyingPeople3.crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                FlyingPeople3.crc2.closePath();
                FlyingPeople3.crc2.beginPath();
                FlyingPeople3.crc2.moveTo(_position.x, _position.y);
                FlyingPeople3.crc2.lineTo(_position.x - 20, _position.y - 20);
                FlyingPeople3.crc2.lineTo(_position.x + 30, _position.y - 30);
                FlyingPeople3.crc2.stroke();
                FlyingPeople3.crc2.fillStyle = this.changeColor();
                FlyingPeople3.crc2.fill();
                FlyingPeople3.crc2.closePath();
            }
            if (this.activity = "walking") {
                //Kein Schirm
                FlyingPeople3.crc2.beginPath();
                FlyingPeople3.crc2.fillStyle = this.changeColor();
                FlyingPeople3.crc2.fillRect(_position.x, _position.y, 10, 16);
                FlyingPeople3.crc2.fillStyle = this.changeColor();
                FlyingPeople3.crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                FlyingPeople3.crc2.closePath();
            }
            if (this.activity = "climbing") {
                //KeinSchirm
                FlyingPeople3.crc2.beginPath();
                FlyingPeople3.crc2.fillStyle = this.changeColor();
                FlyingPeople3.crc2.fillRect(_position.x, _position.y, 10, 16);
                FlyingPeople3.crc2.fillStyle = this.changeColor();
                FlyingPeople3.crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                FlyingPeople3.crc2.closePath();
            }
        }
        ;
        move(_timeslice) {
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
})(FlyingPeople3 || (FlyingPeople3 = {}));
//# sourceMappingURL=FlyingPerson.js.map