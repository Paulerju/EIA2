/*
Aufgabe: <Aufgabe 8.2 Canvas>
Name: <Judith Pauler>
Matrikel: <272240>
Datum: <19.05.23>
Quellen: <Madeleine Hansen>
*/
namespace Canvas {

   window.addEventListener("load", handleLoad);
   export let crc2: CanvasRenderingContext2D;
   export let x: number = 50;
   export  let y: number = 80;
   export  let particle: Path2D = new Path2D();
   export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
   

    function handleLoad(_event: Event): void {
        console.log("canvas not working"); 
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        let drawc : background = new background; 

        drawc.drawBackground();
        drawc.drawMountains();
        drawc.drawClouds();
        drawc.drawBigMountains();
        drawc.drawHouse();
        drawc.drawTree();
        drawc.drawLanding();
        drawc.drawSun();
        drawc.flying({x: 0, y:0}, {x: -400, y: 250}, "#b30000");
        drawc.flying({x: 0, y:0}, {x: -750, y: 150},"#8a0a2a");
        drawc.flying({x: 0, y:0}, {x: -250, y: 150},"#b85f00");
        drawc.flying({x: 0, y:0}, {x: -100, y: 250},"#d9af25");
        drawc.human({x: -300, y: 650}, "red");
        drawc.human({x: -260, y: 640}, "purple"); drawc.human({x: -250, y: 660}, "blue"); drawc.human({x: -750, y: 660}, "#3275a8"); 
        drawc.human({x: -80, y: 610}, "#4ab1b5"); drawc.human({x: -40, y: 620}, "#614ab5");
        drawc.windThing();
        drawc.drawBee(-300, 400); drawc.drawBee(-500, 300); drawc.drawBee(-400, 200);

    };

    
}