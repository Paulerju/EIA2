namespace OMDF{

   export class Pig{

        drawPig(): void {
            this.drawBody();
            this.drawHead();
            this.drawEyes();
            this.drawNose();
            this.drawEars();
        }

         drawBody(): void {
            crc2.fillStyle = "#e8bebe"; 
            crc2.fillRect(445, 250, 60, 50); 
        }

         drawHead(): void {
            crc2.fillStyle = "#e8bebe";
            crc2.fillRect(437, 195, 75, 70); 
        }

         drawEyes(): void {
    
            crc2.fillStyle = "black";
            crc2.fillRect(445, 215, 18, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(447, 218, 4, 4);

   
            crc2.fillStyle = "black";
            crc2.fillRect(485, 215, 18, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(488, 218, 4, 4);
        }

         drawNose(): void {
            crc2.fillStyle = "#f5cece";
            crc2.fillRect(462, 238, 20, 20);

            crc2.fillStyle = "#e3b1b1";
            crc2.fillRect(466, 242, 4, 11);

            crc2.fillStyle = "#e3b1b1";
            crc2.fillRect(476, 242, 4, 11);
        
        }

         drawEars(): void {
   
        crc2.fillStyle = "#e8bebe"; 
        crc2.beginPath();
        crc2.moveTo(460, 175);
        crc2.lineTo(430, 195);
        crc2.lineTo(460, 195);
        crc2.fill();

    
        crc2.fillStyle = "#e8bebe"; 
        crc2.beginPath();
        crc2.moveTo(490, 175);
        crc2.lineTo(518, 195);
        crc2.lineTo(490, 195);
        crc2.fill();
        
        }
    }
}