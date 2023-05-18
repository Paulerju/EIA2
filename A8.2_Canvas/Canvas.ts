/*
Aufgabe: <Aufgabe 8.2 Canvas>
Name: <Judith Pauler>
Matrikel: <272240>
Datum: <11.05.23>
Quellen: <Madeleine Hansen>
*/
namespace CanvasA2 {

    interface Vector {
        x: number;
        y: number;
    };

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        // if (!Canvas)
        console.log("canvas not working");
        //return; 
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        drawMountains();
        drawClouds();
        drawBigMountains();
        drawHouse();
        drawTree();
        drawLanding();
        drawSun();
        flying({x: 0, y:0}, {x: -400, y: 250});

        drawBee(-300, 400); drawBee(-500, 300); drawBee(-400, 200);

    };

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.12, "lightblue");
        gradient.addColorStop(1, "green");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    };

    function drawMountains(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(100,50,100,250);
        gradient.addColorStop(0, "lightgray");
        gradient.addColorStop(1, "gray");

        crc2.beginPath(); // small mountains
        crc2.moveTo(-100, 335);
        crc2.lineTo(40, 30);
        crc2.lineTo(90, 130);
        crc2.lineTo(160, 50);
        crc2.lineTo(220, 130);
        crc2.lineTo(300, 30);
        crc2.lineTo(350, 130);
        crc2.lineTo(450, 50);
        crc2.lineTo(550, 110);
        crc2.lineTo(620, 40);
        crc2.lineTo(680, 110);
        crc2.lineTo(750, 30);
        crc2.lineTo(900, 330);
        crc2.closePath();
        crc2.strokeStyle = '#d9ddde';
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = gradient;
        crc2.fill();
    };
    let x: number = 50;
    let y: number = 80;
    let particle: Path2D = new Path2D();

    function draw1() {
        crc2.translate(x, y);
        crc2.save();
        crc2.fill(particle);
        crc2.stroke();
        crc2.restore();
    };

    function drawClouds() {
        let radiusParticle: number = 20;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(1, "HSLA(196, 100%, 95%, 0.8)");

        crc2.fillStyle = gradient;
        draw1();
        x = -10; y = 7; draw1();
        y = 0; draw1();
        x = 100; draw1();
        x = 20; y = 10; draw1();
        x = 20; y = 0; draw1();
        x = 20; y = -5; draw1();
        x = 70; y = 5; draw1();
        x = 20; y = 5; draw1();
        x = 20; y = -8; draw1();
        x = 20; y = 8; draw1();
        x = 80; y = -10; draw1();
        x = 20; y = 8; draw1();
        x = 20; y = -8; draw1();
        x = 20; y = -2; draw1();
        x = 25; y = -2; draw1();
        x = 20; y = 0; draw1();
        x = 70; y = 10; draw1();
        x = 20; y = 5; draw1();
        x = 20; y = -5; draw1();
        x = 20; y = -5; draw1();
        x = 20; y = 5; draw1();
        x = 60; y = -25; draw1();
        x = 20; y = 5; draw1();
        x = 20; y = 10; draw1();
        x = 20; y = -5; draw1();
    };

    function drawBigMountains(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightgray");
        gradient.addColorStop(0.8, "gray");

        crc2.beginPath(); 
        crc2.moveTo(-130, 10);
        crc2.lineTo(250,350); 
        crc2.lineTo(-920,350); 
        crc2.lineTo(-680,10); 
        crc2.lineTo(-500,250); 
        crc2.lineTo(-300,10); 
        crc2.lineTo(-200,100); 
        crc2.closePath();
        crc2.strokeStyle = '#d9ddde';
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = "grey";
        crc2.fill();
    };

    function drawHouse(){

        crc2.beginPath();
        crc2.rect(-250, 500, 150, 150);
        crc2.fillStyle = "#00394d";
        crc2.fill();
        crc2.closePath(); 
        crc2.beginPath(); 
        crc2.rect(-275, 500, 200, 20);
        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "#0086b3";
        crc2.fillRect(-100, 525, 60, 10);
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(-50, 535, 5, 115);
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "#004b66";
        crc2.fillRect(-101, 590, 5, 10);


    };

    function drawTree() {

    crc2.rect(-700,330,10,60);
    crc2.fillStyle = "#4d2600";
    crc2.fill();
    crc2.closePath(); 
    crc2.beginPath();
    crc2.arc(-695, 330, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "green";
    crc2.fill();
    crc2.closePath();

    crc2.beginPath();
    crc2.rect(-100,420,10,60);
    crc2.fillStyle = "#4d2600";
    crc2.fill();
    crc2.closePath(); 
    crc2.beginPath();
    crc2.arc(-96, 400, 50, 0, 2 * Math.PI);
    crc2.fillStyle = "green";
    crc2.fill();

    }; 

    function drawLanding() {

        crc2.beginPath();
            crc2.ellipse(-540, 550, 220, 90, 0, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#bfbfbf";
            crc2.fill();
            crc2.closePath();
    };

    function drawSun() {

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60 ,100%, 50%, 0)")

        crc2.save();
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();

    }

    const circle = function (x, y, radius, fillCircle) {
        crc2.beginPath();
        crc2.arc(x, y, radius, 0, Math.PI * 2, false);
        if (fillCircle) {
          crc2.fill();
        } else {
          crc2.stroke();
        }
      };

    function drawBee(x, y) {
        crc2.lineWidth = 2;
        crc2.strokeStyle = "black";
        crc2.fillStyle = "#ffff80";
      
        circle(x, y, 8, true);
        circle(x, y, 8, false);
        circle(x - 5, y - 11, 5, false);
        circle(x + 5, y - 11, 5, false);
        circle(x - 2, y - 1, 2, false);
        circle(x + 2, y - 1, 2, false);
      }; 

      function flying(_position: Vector, _size: Vector){

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
        crc2.fillStyle = "#b30000"; 
        crc2.fill();
        crc2.closePath();
   

      };

}