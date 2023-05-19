namespace OMDF {
    export class Dog {

        drawDog(): void {
            this.drawBody();
            this.drawHead();
            this.drawEyes();
            this.drawNose();
            this.drawEars();
        }

         drawBody(): void {
            crc2.fillStyle = "#858585"; 
            crc2.fillRect(50, 250, 50, 50); // Body
        }

         drawHead(): void {
            crc2.fillStyle = "#858585"; 
            crc2.fillRect(40, 195, 70, 70); // Head
        }

         drawEyes(): void {
            // Left eye
            crc2.fillStyle = "black";
            crc2.fillRect(50, 215, 14, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(53, 218, 4, 4);

            // Right eye
            crc2.fillStyle = "black";
            crc2.fillRect(85, 215, 14, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(88, 218, 4, 4);
        }

         drawNose(): void {
            crc2.fillStyle = "black";
            crc2.fillRect(68, 238, 10, 5); 
        }

         drawEars(): void {
            // Left ear
            crc2.fillStyle = "#858585"; 
            crc2.fillRect(25, 188, 25, 15);
           

            // Right ear
            crc2.fillStyle = "#858585"; 
            crc2.fillRect(100, 188, 25, 15);
        
        }



    }
}