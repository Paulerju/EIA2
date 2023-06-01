/*
Aufgabe: <Aufgabe 9.2 Canvas>
Name: <Judith Pauler>
Matrikel: <272240>
Datum: <01.06.23>
Quellen: <Madeleine Hansen>
*/
namespace Canvas {

   window.addEventListener("load", handleLoad);
   export let crc2: CanvasRenderingContext2D;
   export let x: number = 50;
   export  let y: number = 80;
   export  let particle: Path2D = new Path2D();
   let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
   
   

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log("canvas not working"); 
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        let drawc : background = new background; 
        let newBee : bee = new bee; 
        let newHuman : human = new human; 

        drawc.drawBackground();
        drawc.drawMountains();
        drawc.drawClouds();
        drawc.drawBigMountains();
        drawc.drawHouse();
        drawc.drawTree();
        drawc.drawLanding();
        drawc.drawSun();
        
        newHuman.flying({x: 0, y:0}, {x: -400, y: 250}, "#b30000");
        newHuman.flying({x: 0, y:0}, {x: -750, y: 150},"#8a0a2a");
        newHuman.flying({x: 0, y:0}, {x: -250, y: 150},"#b85f00");
        newHuman.flying({x: 0, y:0}, {x: -100, y: 250},"#d9af25");
        newHuman.human({x: -300, y: 650}, "red");
        newHuman.human({x: -260, y: 640}, "purple"); newHuman.human({x: -250, y: 660}, "blue"); newHuman.human({x: -750, y: 660}, "#3275a8"); 
        newHuman.human({x: -80, y: 610}, "#4ab1b5"); newHuman.human({x: -40, y: 620}, "#614ab5");
        drawc.windThing();
        newBee.drawBee(-300, 400); newBee.drawBee(-500, 300); newBee.drawBee(-400, 200);

       
    };

    window.setInterval(()=> {

         

    }, 100)

    
}