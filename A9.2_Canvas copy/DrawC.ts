namespace Canvas{

   export class background{

     drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.12, "lightblue");
        gradient.addColorStop(1, "green");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    };

     drawMountains(): void {

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
    

     draw1() {
        crc2.translate(x, y);
        crc2.save();
        crc2.fill(particle);
        crc2.stroke();
        crc2.restore();
    };

     drawClouds() {
        let radiusParticle: number = 20;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(1, "HSLA(196, 100%, 95%, 0.8)");

        crc2.fillStyle = gradient;
        this.draw1();
        x = -10; y = 7; this.draw1();
        y = 0; this.draw1();
        x = 100; this.draw1();
        x = 20; y = 10; this.draw1();
        x = 20; y = 0; this.draw1();
        x = 20; y = -5; this.draw1();
        x = 70; y = 5; this.draw1();
        x = 20; y = 5; this.draw1();
        x = 20; y = -8; this.draw1();
        x = 20; y = 8; this.draw1();
        x = 80; y = -10; this.draw1();
        x = 20; y = 8; this.draw1();
        x = 20; y = -8; this.draw1();
        x = 20; y = -2; this.draw1();
        x = 25; y = -2; this.draw1();
        x = 20; y = 0; this.draw1();
        x = 70; y = 10; this.draw1();
        x = 20; y = 5; this.draw1();
        x = 20; y = -5; this.draw1();
        x = 20; y = -5; this.draw1();
        x = 20; y = 5; this.draw1();
        x = 60; y = -25; this.draw1();
        x = 20; y = 5; this.draw1();
        x = 20; y = 10; this.draw1();
        x = 20; y = -5; this.draw1();
    };

     drawBigMountains(): void {

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

     drawHouse(){

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

     drawTree() {

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

     drawLanding() {

        crc2.beginPath();
            crc2.ellipse(-540, 550, 220, 90, 0, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#bfbfbf";
            crc2.fill();
            crc2.closePath();
    };

     drawSun() {

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
       windThing(){
        crc2.rect(-500,590,3,80);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath(); 
        crc2.beginPath();
        crc2.rect(-497,590,10,20);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath(); 
        crc2.beginPath();
        crc2.rect(-487,591,10,18);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.closePath(); 
        crc2.beginPath();
        crc2.rect(-477,592,10,16);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath(); 
        crc2.beginPath();
        crc2.rect(-467,593,10,14);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.closePath(); 
        crc2.beginPath();
        crc2.rect(-457,595,8,10);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath(); 

      }

}
}