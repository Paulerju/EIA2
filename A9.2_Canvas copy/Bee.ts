namespace Canvas{

export class bee{

  position :Vektor;
  velosity: Vektor;

  constructor(_size: number){
    console.log("Balloon constructor");
    this.position = new Vektor(480, 400);
    this.velosity = new Vektor(0,0);
    this.velosity.random (100,150);
}

move(_timeslice: number): void{
    console.log("Bee move");
    let offset: Vektor = new Vektor (this.velosity.x,this.velosity.y);
    offset.scale(_timeslice);
    this.position.add(offset); }

    circle(x, y, radius, fillCircle) {
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