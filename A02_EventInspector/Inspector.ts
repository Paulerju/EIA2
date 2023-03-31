namespace EventInspector {

window.addEventListener("load", hndload);
let span: HTMLElement = <HTMLElement> document.getElementById("#span");


function  hndload(): void{

    document.addEventListener("mousemove", setInfoBox);

    document.addEventListener("click", logInfo);
    document.body.addEventListener("click", logInfo);
    document.getElementById("div0")?.addEventListener("click", logInfo);
    document.getElementById("div1")?.addEventListener("click", logInfo);

    document.addEventListener("keyup", logInfo);
    document.body.addEventListener("keyup", logInfo);
    document.getElementById("div0")?.addEventListener("keyup", logInfo);
    document.getElementById("div1")?.addEventListener("keyup", logInfo);
}
function setInfoBox(_event: MouseEvent): void{
    let x: number = _event.clientX;
    let y: number = _event.clientY;

    span!.innerHTML = "mouse position: " + x + " Events target: " + y ;    
    span!.style.top = y;
    span!.style.left = x;
}

function logInfo(){

    
}

}