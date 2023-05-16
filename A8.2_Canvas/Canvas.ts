  /*
  Aufgabe: <Aufgabe 8.2 Canvas>
  Name: <Judith Pauler>
  Matrikel: <272240>
  Datum: <11.05.23>
  Quellen: <>
  */
namespace CanvasA2{

    interface Vector {
        x: number; 
        y: number; 
    }

window.addEventListener("load", handleLoad);
let crc2: CanvasRenderingContext2D; 

function handleLoad(_event:Event):void{
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
   // if (!Canvas)
    console.log("canvas not working");
    //return; 
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    drawBackground();
    drawMountains();
 
    
}

function drawBackground():void {
    console.log("Background");

    let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0,crc2.canvas.height);
    gradient.addColorStop(0, "lightblue");
    gradient.addColorStop(0.5, "white");

    crc2.fillStyle = gradient; 
    crc2.fillRect(0,0,crc2.canvas.width, crc2.canvas.height);

}

function drawMountains():void {

    let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0,crc2.canvas.height);
    gradient.addColorStop(0, "lightgray");
    gradient.addColorStop(0.8, "gray");

    crc2.beginPath(); // small mountains
    crc2.moveTo(-20,170); 
    crc2.lineTo(40,30);
    crc2.lineTo(90,130);
    crc2.lineTo(160,50);
    crc2.lineTo(220,130);
    crc2.lineTo(300,30);
    crc2.lineTo(350,130);
    crc2.lineTo(450,50);
    crc2.lineTo(550,110);
    crc2.lineTo(620,40);
    crc2.lineTo(680,110);
    crc2.lineTo(750,30);
    crc2.lineTo(820,170);
    crc2.closePath();
    crc2.stroke();
    crc2.closePath();
    crc2.fillStyle = "gradient"; // gradient not working yet
    crc2.fill();
}

}