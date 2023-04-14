namespace Datensammlung {

    /* export interface Aufgabe {
         taskname: string;
         date: string;
         comment: string;
         person: Selection[];
         progress: boolean;
 
     } */

    let taskArray1: String[] = [];
    let strArray1: string = taskArray1.toString();
    let newdiv = document.createElement("div");
    newdiv.setAttribute("id", "newtask");
    let newP = document.createElement("p"); 
    document.getElementById("div1")!.appendChild(newdiv);
    document.querySelector("#div1")!.appendChild(newP);
    newP.innerHTML = "Whatttttttttttttt isssssssssssssss gooooing on";
    


    function getData(): String[] {

        const form: HTMLFormElement = document.querySelector('#form1')!;
        let taskArray: String[];

        const formData = new FormData(form);
        console.log(formData);
        const text0 = formData.get('taskname') as string;
        const text1 = formData.get('date') as string;
        const text2 = formData.get('comment') as string;
        const text3 = formData.get('Person') as string;
        const text4 = formData.get('box') as string;

        taskArray = [text0, text1, text2, text3, text4];
        console.log("getData: " + taskArray);
        taskArray1 = taskArray; // why isnt this working?
        console.log("in: " + taskArray1);
        taskArray1 = taskArray;

        return taskArray1;
    }

    let wrap = <HTMLElement>document.querySelector("#wrapper");
    // let div1 = document.querySelector("#task1");

    let Trashbin = document.createElement("button");
    Trashbin.setAttribute("id", "trash");

    Trashbin.addEventListener("click", function () {
        this!.parentNode!.parentNode!.removeChild(this!.parentNode!);
        taskArray1.pop();
    });

    document.querySelector("#add")!.addEventListener("click", function () {
        wrap.style.setProperty("visibility", "visible");

    });

    document.querySelector("#add2")!.addEventListener("click", function () {
        // wrap.style.setProperty("visibility", "hidden"); 
        getData();
     
        console.log("out: " + taskArray1);

    });

    document.querySelector("#box")?.addEventListener("click", function () {

    });

}