"use strict";
var FlyingPeople3;
(function (FlyingPeople3) {
    class Vector {
        x;
        y;
        _radiusX;
        _radiusY;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        subtract(_sub) {
            this.x -= _sub.x;
            this.y -= _sub.y;
        }
        subtract_climb(_sub) {
            // this.x-=_sub.x;
            this.y -= _sub.y;
        }
        randomize(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    FlyingPeople3.Vector = Vector;
})(FlyingPeople3 || (FlyingPeople3 = {}));
//# sourceMappingURL=vector.js.map