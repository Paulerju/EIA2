namespace OMDF{
    window.addEventListener("load", handleLoad);
   export let crc2: CanvasRenderingContext2D;
   let dog= new Dog();
   let cow= new Cow();
   let pig = new Pig();
   let chicken = new Chicken();
   let donkey = new Donkey();

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log("canvas not working");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawBackground();
        dog.drawDog();
        cow.drawCow();
        pig.drawPig();
        chicken.drawChicken();
        donkey.drawDonkey();
        drawWall();
        
    }; 

    function drawBackground(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "white");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    };
    function drawWall():void {

        crc2.fillStyle = "#262626";
        crc2.fillRect(0, 290, crc2.canvas.width, 250);
    }

}