"use strict";
var Canvas;
(function (Canvas) {
    class Vektor {
        x;
        y;
        constructor(_x, _y) {
            this.x = Canvas.x;
            this.y = Canvas.y;
        }
        add(vector) {
            return new Vektor(this.x + vector.x, this.y + vector.y);
        }
        multiply(scalar) {
            return new Vektor(this.x * scalar, this.y * scalar);
        }
    }
    Canvas.Vektor = Vektor;
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Vektor.js.map