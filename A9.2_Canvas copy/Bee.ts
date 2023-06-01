namespace Canvas{

export class bee{

    circle (x, y, radius, fillCircle) {
        crc2.beginPath();
        crc2.arc(x, y, radius, 0, Math.PI * 2, false);
        if (fillCircle) {
          crc2.fill();
        } else {
          crc2.stroke();
        }
      };

drawBee(x, y) {
    crc2.lineWidth = 2;
    crc2.strokeStyle = "black";
    crc2.fillStyle = "#ffff80";
  
    this.circle(x, y, 8, true);
    this.circle(x, y, 8, false);
    this.circle(x - 5, y - 11, 5, false);
    this.circle(x + 5, y - 11, 5, false);
    this.circle(x - 2, y - 1, 2, false);
    this.circle(x + 2, y - 1, 2, false);
  }; 
}
}