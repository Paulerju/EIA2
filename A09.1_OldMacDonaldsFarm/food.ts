namespace OMDF{

export class Food {
    
     blockSize: number;
     context: CanvasRenderingContext2D;
  
    constructor(blockSize: number, context: CanvasRenderingContext2D) {
      this.blockSize = blockSize;
      this.context = context;
    }
  
     drawBlock(x: number, y: number, color: string): void {
      const xPos = x * this.blockSize;
      const yPos = y * this.blockSize;
  
      this.context.fillStyle = color;
      this.context.fillRect(xPos, yPos, this.blockSize, this.blockSize);
    }
  
    public drawManger(): void {
          crc2.fillStyle = "#362109"; 
         crc2.fillRect(20, 420, 150, 100); 

         crc2.fillStyle = "#362109"; 
         crc2.fillRect(210, 420, 150, 100); 

         crc2.fillStyle = "#362109"; 
         crc2.fillRect(400, 420, 150, 100); 

         crc2.fillStyle = "#362109"; 
         crc2.fillRect(600, 420, 150, 100); 

         crc2.fillStyle = "#362109"; 
         crc2.fillRect(810, 420, 150, 100); 
    }
    
    public drawFood(_a:number, _b:number, _c: number, _d:number , _color1:string,_color2:string, _color3:string, _color4:string): void {
        let i = 0;
      
        while (i < 13) {
          this.drawBlock(_a, 41, _color1);
          i++;
          _a++;
        }
      
        while (i < 24) {
          this.drawBlock(_b, 40, _color2);
          i++;
          _b++;
        }
      
        while (i < 33) {
          this.drawBlock(_c, 39, _color3);
          i++;
          _c++;
        }

        while (i < 40) {
            this.drawBlock(_d, 38, _color4);
            i++;
            _d++;
          }
      
        console.log("food");
        return;
      }

  
    public clearCanvas(): void {
      const canvas: HTMLCanvasElement = this.context.canvas;
      this.context.clearRect(0, 0, canvas.width, canvas.height);
    }
  


}
}