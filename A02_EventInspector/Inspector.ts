namespace EventInspector {
    /*
      Aufgabe: <Aufgabe 2 EventInspector>
      Name: <Judith Pauler>
      Matrikel: <272240>
      Datum: <31.03.23>
      Quellen: <Laura Kupferschmied, Madelein Hansen>
      */

    window.addEventListener("load", hndload);
    let span: HTMLElement = <HTMLElement>document.getElementById("span");


    function hndload(): void {

        document.addEventListener("mousemove", setInfoBox);

        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.getElementById("div0")?.addEventListener("click", logInfo);
        document.getElementById("div1")?.addEventListener("click", logInfo);

        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("div0")?.addEventListener("keyup", logInfo);
        document.getElementById("div1")?.addEventListener("keyup", logInfo);
        document.getElementById("bt")?.addEventListener("click", button1);
    }
    function setInfoBox(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let tar: EventTarget | null = _event.target;

        span!.innerHTML = "mouse position X: " + x + " Y: " + y + " Events target: " + tar;
        span.style.top = y + "px";
        span.style.left = x + "px";
    }

    function logInfo(_event: Event): void {

        console.log("Type: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Event: " + _event);

    }

  
    const customevent = new CustomEvent("button",{bubbles:true, detail: {name:"bt wurde gedrückt"} });

    function button1(){
        document.addEventListener("button", customEvent);
        document.dispatchEvent(customevent);
    }

    function customEvent(){
        console.log(customevent.bubbles)
        console.log(customevent.detail)
    }
   
   


}