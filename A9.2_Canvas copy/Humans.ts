namespace Canvas{

    interface Vector {
        x: number;
        y: number;
    };

    export class human{

        position: Vektor;
    color: string;

    constructor(position: Vektor, color: string) {
      this.position = position;
      this.color = color;}
        
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

      move(target: Vektor): void {
        const speed = 2; // Adjust the speed as needed
        const direction = target.add(this.position.multiply(-1));
        const distance = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
        const normalizedDirection = direction.multiply(1 / distance);
        const movement = normalizedDirection.multiply(speed);
        this.position = this.position.add(movement);
      }



      fly(start: Vektor, end: Vektor): void {
        const duration = 1000; // Adjust the duration as needed
        let startTime = Date.now();
        let currentTime = startTime;
  
        const animate = () => {
          crc2.clearRect(0, 0, canvas.width, canvas.height);
  
          currentTime = Date.now();
          const elapsed = currentTime - startTime;
          const progress = elapsed / duration;
  
          if (progress < 1) {
            const currentPos = start.add(end.add(start.multiply(-1)).multiply(progress));
            this.move(currentPos);
          //  this.draw();
            requestAnimationFrame(animate);
          } else {
            this.move(end);
         //   this.draw();
          }
        };
  
        animate();
      }


}
}