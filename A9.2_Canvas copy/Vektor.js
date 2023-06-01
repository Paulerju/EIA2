"use strict";
var Canvas;
(function (Canvas) {
    class Vector {
        x;
        y;
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
            this.y -= _sub.y;
        }
    }
    Canvas.Vector = Vector;
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Vektor.js.map