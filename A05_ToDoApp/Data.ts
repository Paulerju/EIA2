namespace Datensammlung {

      /*
      Aufgabe: <Aufgabe 4 ToDo>
      Name: <Judith Pauler>
      Matrikel: <272240>
      Datum: <22.04.23>
      Quellen: <>
      */

    let taskArray1: String[] = [];
    let form: HTMLFormElement; 
    
   export interface Datainput  {
     [key: string]: FormDataEntryValue;
    };


    function getData(): String[] {

        let form: HTMLFormElement = document.querySelector('#form1')!;
        let taskArray: String[];

        let formData = new FormData(form);
        console.log(formData);
        let text0 = formData.get('taskname') as string;
        let text1 = formData.get('date') as string;
        let text2 = formData.get('comment') as string;
        let text3 = formData.get('Person') as string;
        let text4 = formData.get('box') as string; 

        taskArray = [text0, text1, text2, text3, text4];
        console.log("getData: " + taskArray);
        taskArray1 = taskArray; 
        return taskArray1;
    }; 

   async function handleLoade(_event: Event): Promise<void> {

     let response: Response = await fetch("Datainput.json");
     let offer: string = await response.text();
     let data: Datainput = JSON.parse(offer);
     generateContent(); // müssen die Daten einzeln noch einfügen (Data)

     let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add2"); 
     console.log("Submit"+submit); 
     submit.addEventListener("click", sendTask);
    } 
    handleLoade();

   async function sendTask(_event: Event): Promise<void> {
      console.log("Task send");
      let formData: FormData = new FormData(form);
      let query: URLSearchParams = new URLSearchParams(<any>formData);
      await fetch("main.html"+ query.toString());
      alert("Task Submited!");
    }

    async function communicate(_url: RequestInfo): Promise<void> {
      let response: Response = await fetch(_url);
      console.log("Response", response);
      let offer: string= await response.text();
      console.log("before"+offer);
      let gotdata: Datainput = JSON.parse(offer);//In string umwandeln?
      // gotdata is empty, offer is a string, cant read the stuff out
      console.log("this"+gotdata);
     // document.querySelector("#div1")!.innerHTML = "Aufgabe: "+ offer["taskname"] + "  bis zum: "+ gotdata["date"]+ "  Kommentar: "+ gotdata["comment"]+ "  Wird gemacht von: "+ gotdata["person"];
    
  }

  console.log("Start");
 communicate("Datainput.json");
 console.log("Ende");
 let firstp = document.createElement("p");
 document.querySelector("#div1")?.appendChild(firstp);
 firstp.innerHTML =""  ;


    let wrap = <HTMLElement>document.querySelector("#wrapper");

    document.querySelector("#add")!.addEventListener("click", function () {
        wrap.style.setProperty("visibility", "visible");

    });
    
    document.querySelector("#add2")!.addEventListener("click", function (e) {
      wrap.style.setProperty("visibility", "hidden"); 
      getData();
      let newdiv = document.createElement("div");
      newdiv.setAttribute("id", "newtask");
      let newP = document.createElement("p"); 
      newdiv.setAttribute("id", "newp");
      document.getElementById("div1")!.appendChild(newdiv);
      document.querySelector("#div1")!.appendChild(newP);
      newP.innerHTML = "Aufgabe: "+ taskArray1[0] + "  bis zum: "+ taskArray1[1]+ "  Kommentar: "+ taskArray1[2]+ "  Wird gemacht von: "+ taskArray1[3];
      e.preventDefault();

      let Trashbin = document.createElement("button");
      Trashbin.setAttribute("id", "trash");
      newP.appendChild(Trashbin);
      Trashbin.innerHTML = "Delete";

      Trashbin.addEventListener("click", function () {
        this!.parentNode!.parentNode!.removeChild(this!.parentNode!);
    });
    
    let edit = document.createElement("button");
    edit.setAttribute("id", "edit");
    newP.appendChild(edit);
    edit.innerHTML = "Edit";

    edit.addEventListener("click", function () {
      wrap.style.setProperty("visibility", "visible");
    });
    });

}