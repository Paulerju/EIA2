"use strict";
var Canvas;
(function (Canvas) {
    ;
    class human {
        flying(_position, _size, _color) {
            let x = _size.x;
            let y = _size.y;
            Canvas.crc2.beginPath();
            Canvas.crc2.fillStyle = "#003300";
            Canvas.crc2.fillRect(x, y, 5, 8);
            Canvas.crc2.fillStyle = "#ffffcc";
            Canvas.crc2.fillRect(x, y - 3, 5, 5);
            Canvas.crc2.closePath();
            Canvas.crc2.beginPath();
            Canvas.crc2.moveTo(x, y);
            Canvas.crc2.lineTo(x - 15, y - 15);
            Canvas.crc2.lineTo(x + 25, y - 25);
            Canvas.crc2.stroke();
            Canvas.crc2.fillStyle = _color;
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
        }
        ;
        human(_position, _color) {
            let x = _position.x;
            let y = _position.y;
            Canvas.crc2.beginPath();
            Canvas.crc2.fillStyle = _color;
            Canvas.crc2.fillRect(x, y, 15, 33);
            Canvas.crc2.fillStyle = "#ffffcc";
            Canvas.crc2.fillRect(x, y - 20, 15, 20);
            Canvas.crc2.closePath();
        }
        ;
    }
    Canvas.human = human;
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Humans.js.map