namespace OMDF{
    export class Chicken{

        drawChicken(): void {
            this.drawBody();
            this.drawHead();
            this.drawEyes();
            this.drawNose();
            this.drawEars();
        }

         drawBody(): void {
            crc2.fillStyle = "#ffffff"; 
            crc2.fillRect(645, 250, 60, 50); 
        }

         drawHead(): void {
            crc2.fillStyle = "#ffffff";
            crc2.fillRect(637, 195, 75, 70); 
        }

         drawEyes(): void {
    
            crc2.fillStyle = "black";
            crc2.fillRect(650, 215, 10, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(653, 218, 4, 4);

   
            crc2.fillStyle = "black";
            crc2.fillRect(685, 215, 10, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(688, 218, 4, 4);
        }

         drawNose(): void {
            crc2.fillStyle = "#d6b245"; 
            crc2.beginPath();
            crc2.moveTo(660, 240);
            crc2.lineTo(688, 240);
            crc2.lineTo(673, 260);
            crc2.fill();
        
        }

         drawEars(): void {

            crc2.fillStyle = "#dbc991";
            crc2.fillRect(668, 165, 10, 30);
        }
    }
    
}