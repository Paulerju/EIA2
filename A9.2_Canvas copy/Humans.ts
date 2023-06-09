namespace Canvas {

  export class human {

    position: Vektor;
    color: string;
    velosity: Vektor;
    size: number; 

    constructor(_size: number){
      // console.log("Paraglider constructor");
       this.position = new Vektor(0,0);
       this.velosity = new Vektor(0,0);
       this.velosity.random (100,200);

       this.size = _size;
   }

    flying(_position: Vektor, _size: Vektor, _color: string) {

      let x = _size.x;
      let y = _size.y;

      crc2.beginPath();
      crc2.fillStyle = "#003300";
      crc2.fillRect(x, y, 5, 8);
      crc2.fillStyle = "#ffffcc";
      crc2.fillRect(x, y - 3, 5, 5);
      crc2.closePath();
      crc2.beginPath();
      crc2.moveTo(x, y);
      crc2.lineTo(x - 15, y - 15);
      crc2.lineTo(x + 25, y - 25);
      crc2.stroke();
      crc2.fillStyle = _color;
      crc2.fill();
      crc2.closePath();


    };

    human(_position: Vektor, _color: string) {
      let x = _position.x;
      let y = _position.y;

      crc2.beginPath();
      crc2.fillStyle = _color;
      crc2.fillRect(x, y, 15, 33);
      crc2.fillStyle = "#ffffcc";
      crc2.fillRect(x, y - 20, 15, 20);
      crc2.closePath();

    };

    move(_timeslice: number): void{
       console.log("Paraglider move");
       let Startpoint: Vektor = new Vektor (this.velosity.x,this.velosity.y);
       Startpoint.scale(_timeslice);
       this.position.add(Startpoint);
   }


  }
}