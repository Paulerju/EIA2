namespace OMDF{

   export class Cow{
        drawCow(): void {
            this.drawBody();
            this.drawHead();
            this.drawEyes();
            this.drawNose();
            this.drawEars();
        }

         drawBody(): void {
            crc2.fillStyle = "#e3dfdc"; 
            crc2.fillRect(250, 250, 50, 50); 
        }

         drawHead(): void {
            crc2.fillStyle = "#f0ece9"; 
            crc2.fillRect(240, 195, 70, 70); 
        }

         drawEyes(): void {
            
            crc2.fillStyle = "black";
            crc2.fillRect(250, 215, 10, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(253, 218, 4, 4);

            
            crc2.fillStyle = "black";
            crc2.fillRect(285, 215, 10, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(288, 218, 4, 4);
        }

         drawNose(): void {
            crc2.beginPath();
            crc2.ellipse(273, 245, 15, 10,0,0,Math.PI*2); 
            crc2.fillStyle = "#e3dfdc";
            crc2.fill();
            crc2.closePath(); 

            crc2.beginPath();
            crc2.ellipse(267, 245, 4, 4,0,0,Math.PI*2); 
            crc2.fillStyle = "#ababab";
            crc2.fill();
            crc2.closePath(); 

            crc2.beginPath();
            crc2.ellipse(280, 245, 4, 4,0,0,Math.PI*2); 
            crc2.fillStyle = "#ababab";
            crc2.fill();
            crc2.closePath(); 


        }

         drawEars(): void {
  
        crc2.fillStyle = "#f0ece9"; 
        crc2.beginPath();
        crc2.moveTo(260, 175);
        crc2.lineTo(225, 195);
        crc2.lineTo(260, 195);
        crc2.fill();

   
        crc2.fillStyle = "#f0ece9";
        crc2.beginPath();
        crc2.moveTo(290, 175);
        crc2.lineTo(330, 195);
        crc2.lineTo(290, 195);
        crc2.fill();
        
        }

        talk(_text:string, callback?: () => void):void{
            crc2.fillText("Cow: "+_text,240, 150, 100);
        }
    }
}