namespace Canvas{

    interface Vector {
        x: number;
        y: number;
    };
    
    export class human{

        
    flying(_position: Vector, _size: Vector, _color:string){

        let x = _size.x;
        let y = _size.y;
         
        crc2.beginPath();
        crc2.fillStyle = "#003300"; 
        crc2.fillRect(x,y,5,8);
        crc2.fillStyle = "#ffffcc"; 
        crc2.fillRect(x,y-3,5,5);
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x -15, y-15 );
        crc2.lineTo(x +25, y -25 );
        crc2.stroke();
        crc2.fillStyle = _color; 
        crc2.fill();
        crc2.closePath();


      };

       human(_position: Vector, _color:string){
        let x = _position.x;
        let y = _position.y;

        crc2.beginPath();
        crc2.fillStyle = _color; 
        crc2.fillRect(x,y,15,33);
        crc2.fillStyle = "#ffffcc"; 
        crc2.fillRect(x,y-20,15,20);
        crc2.closePath();

      };
}
}