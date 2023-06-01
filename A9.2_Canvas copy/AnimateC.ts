namespace Canvas{
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    class animate{

        windsock(){
            let imgData = crc2.getImageData(10, 10, canvas.width, canvas.height);
            crc2.putImageData(imgData, 10, 70);
        }
        


    }

}