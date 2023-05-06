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
    drawCircle({x: -200, y:150}, {x: 70, y: 210});
    drawT2({x: 500, y:125}, {x: 550, y: -110}); 
    drawElipse();
    putText();
    drawT1(); 
    
    
}

function drawBackground():void {
    console.log("Background");

    let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0,crc2.canvas.height);
    gradient.addColorStop(0, "lightblue");
    gradient.addColorStop(1, "white");

    crc2.fillStyle = gradient; 
    crc2.fillRect(0,0,crc2.canvas.width, crc2.canvas.height);
    let x = Math.floor(Math.random()*(350 - 20 + 1) + 20);
    let y = Math.floor(Math.random()*(200 - 20 + 1) + 20);
    crc2.clearRect(x,50, 25,25);
    crc2.strokeRect(250,y,10,10);
   
}

function drawT2(_position: Vector, _size: Vector):void{
    console.log("T2");
    let nParticles: number = 40;
    let particle: Path2D = new Path2D();
    let radiusParticle: number = 8; 
    let gradient: CanvasGradient = crc2.createRadialGradient(0,0,0,0,0,radiusParticle);

    particle.arc(0,0,radiusParticle,0,2*Math.PI);
    gradient.addColorStop(1,"lightblue");
    gradient.addColorStop(0,"HSLA(60, 100%, 50%, 0)"); 
    gradient.addColorStop(0.5,"HSLA(60, 100%, 50%, 0)");
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

    }};

    function drawElipse(): void{
        console.log("T3"); 
     
        let a = Math.floor(Math.random()*20);
        let b = Math.floor(Math.random()*40);
            crc2.beginPath();
            crc2.ellipse(230, 80, a, b, Math.PI / 6, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(0,200);
            crc2.lineTo(500,300);
            crc2.stroke();
          //  crc2.fillStyle = crc2.createPattern(crc2.canvas, 'repeat')!;
         
    } 

    function drawCircle(_position: Vector, _size: Vector){
        for(let i=0; i<500; i++) {

            var x = Math.floor(Math.random()* _size.x);
            let y = Math.floor(Math.random()*_size.y);
            let radius = Math.floor(Math.random()*15);
            
            let r = Math.floor(Math.random()*255);
            let g = Math.floor(Math.random()*255);
            let b = Math.floor(Math.random()*255);
              
            crc2.beginPath();
            crc2.arc(x,y,radius,Math.PI*2,0,false);
            crc2.fillStyle = "rgba(" + r + "," + g + "," + b + ",1)"; 
            crc2.fill();
            crc2.closePath();
              

            } 
            }
            function putText(){
                crc2.fillText("Hello there", 50, 90);
                crc2.strokeText("...here we are again",100, 100);
            }

            function drawT1():void {
                console.log("T1");
                var x = Math.floor(Math.random()* 250);
                    let y = Math.floor(Math.random()*150);
                    let o = Math.floor(Math.random()*(350 - 20 + 1) + 20);
                    let one = Math.floor(Math.random()*(40 - 20 + 1) + 20);
                    let two = Math.floor(Math.random()*(40 - 20 + 1) + 20);
                    crc2.setTransform(1, 0.2, 0.8, 1, 0, 0);
                    crc2.fillRect(x,y,40,40);
                    let storedTransform = crc2.getTransform();
        
                    crc2.setTransform(storedTransform);
                    crc2.beginPath();
                    crc2.rotate(o * Math.PI / 180);
                    crc2.scale(one,two);
                    crc2.fillRect(x,y,40,40);
                    crc2.resetTransform();
                    crc2.closePath();
                    crc2.stroke();
        }
        
    }


