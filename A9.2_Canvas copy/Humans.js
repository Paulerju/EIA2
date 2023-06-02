"use strict";
var Canvas;
(function (Canvas) {
    ;
    class human {
        position;
        color;
        constructor(position, color) {
            this.position = position;
            this.color = color;
        }
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
        move(target) {
            const speed = 2; // Adjust the speed as needed
            const direction = target.add(this.position.multiply(-1));
            const distance = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
            const normalizedDirection = direction.multiply(1 / distance);
            const movement = normalizedDirection.multiply(speed);
            this.position = this.position.add(movement);
        }
        fly(start, end) {
            const duration = 1000; // Adjust the duration as needed
            let startTime = Date.now();
            let currentTime = startTime;
            const animate = () => {
                Canvas.crc2.clearRect(0, 0, Canvas.canvas.width, Canvas.canvas.height);
                currentTime = Date.now();
                const elapsed = currentTime - startTime;
                const progress = elapsed / duration;
                if (progress < 1) {
                    const currentPos = start.add(end.add(start.multiply(-1)).multiply(progress));
                    this.move(currentPos);
                    //  this.draw();
                    requestAnimationFrame(animate);
                }
                else {
                    this.move(end);
                    //   this.draw();
                }
            };
            animate();
        }
    }
    Canvas.human = human;
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Humans.js.map