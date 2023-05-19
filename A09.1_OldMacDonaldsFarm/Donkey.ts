namespace OMDF{
    export class Donkey{

        drawDonkey(): void {
            this.drawBody();
            this.drawHead();
            this.drawEyes();
            this.drawNose();
            this.drawEars();
        }

         drawBody(): void {
            crc2.fillStyle = "#8a8a8a"; 
            crc2.fillRect(847, 250, 55, 50); 
        }

         drawHead(): void {
            crc2.fillStyle = "#9c9b9a";
            crc2.fillRect(837, 195, 75, 70); 
        }

         drawEyes(): void {
    
            crc2.fillStyle = "black";
            crc2.fillRect(850, 215, 10, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(853, 218, 4, 4);

   
            crc2.fillStyle = "black";
            crc2.fillRect(885, 215, 10, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(888, 218, 4, 4);
        }

         drawNose(): void {
            crc2.beginPath();
            crc2.ellipse(873, 248, 12, 12,0,0,Math.PI*2); 
            crc2.fillStyle = "#8a8a8a";
            crc2.fill();
            crc2.closePath(); 

            crc2.beginPath();
            crc2.ellipse(867, 248, 3, 3,0,0,Math.PI*2); 
            crc2.fillStyle = "#9c9b9a";
            crc2.fill();
            crc2.closePath(); 

            crc2.beginPath();
            crc2.ellipse(878, 248, 3, 3,0,0,Math.PI*2); 
            crc2.fillStyle = "#9c9b9a";
            crc2.fill();
            crc2.closePath(); 
        
        }

         drawEars(): void {

            crc2.fillStyle = "#9c9b9a"; 
        crc2.beginPath();
        crc2.moveTo(830, 160);
        crc2.lineTo(837, 195);
        crc2.lineTo(860, 195);
        crc2.fill();

    
        crc2.fillStyle = "#9c9b9a"; 
        crc2.beginPath();
        crc2.moveTo(920, 160);
        crc2.lineTo(912, 195);
        crc2.lineTo(890, 195);
        crc2.fill();
        }
    }
    
}