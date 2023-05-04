namespace Canvas {
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
    drawT1({x: 50, y: 80}); 
    drawT2({x: 500, y:125}, {x: 550, y: -110}); 
}

function drawBackground():void {
    console.log("Background");

    let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0,crc2.canvas.height);
    gradient.addColorStop(0, "lightblue");
    gradient.addColorStop(1, "white");

    crc2.fillStyle = gradient; 
    crc2.fillRect(0,0,crc2.canvas.width, crc2.canvas.height);
}
function drawT1(_position: Vector):void {
    console.log("T1");

    let r1: number = 20; 
    let r2: number = 40; 
    let gradient: CanvasGradient = crc2.createRadialGradient(0,0,r1,0,0,r2);
    gradient.addColorStop(0, "yellow");
    gradient.addColorStop(1,"HSLA(60, 100%, 50%, 0)");

    crc2.save();
    crc2.fillStyle = gradient; 
    crc2.translate(_position.x, _position.y);
    crc2.arc(0,0,r2,0,2*Math.PI);
    crc2.fill();
    crc2.restore(); 
    

}
function drawT2(_position: Vector, _size: Vector):void{
    console.log("T2");
    let nParticles: number = 10;
    let particle: Path2D = new Path2D();
    let radiusParticle: number = 8; 
    let gradient: CanvasGradient = crc2.createRadialGradient(0,0,0,0,0,radiusParticle);

    particle.arc(0,0,radiusParticle,0,2*Math.PI);
    gradient.addColorStop(0,"lightblue");
    gradient.addColorStop(1,"blue"); 
    crc2.fillStyle = gradient;

    crc2.save();  
    crc2.translate(_position.x, _position.y);
    crc2.restore(); 

    for (let drawn: number = 0; drawn < nParticles; drawn++){
    let x: number = (Math.random() - 0.5)* _size.x; 
    let y: number = - (Math.random() * _size.y);
    crc2.save();
    crc2.translate(x,y);    
    crc2.fill(particle);
    crc2.restore(); 

    }
}


}