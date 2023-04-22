namespace Datensammlung {

      /*
      Aufgabe: <Aufgabe 4 ToDo>
      Name: <Judith Pauler>
      Matrikel: <272240>
      Datum: <22.04.23>
      Quellen: <>
      */

    let taskArray1: String[] = [];

    let form: HTMLFormElement = document.querySelector('#form1')!; 

    export interface Tasks {
      taskname: string; 
      date: string; 
      comment: string; 
      person: string; 
      box: string; 
    }
    
   export interface Datainput  {
     [key: string]: Tasks[];
    };

    function getData(): String[] {

    
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

      let newdiv = document.createElement("div");
      newdiv.setAttribute("id", "newtask");
      let newP = document.createElement("p"); 
      newdiv.setAttribute("id", "newp");
      let Trashbin = document.createElement("button");
      Trashbin.setAttribute("id", "trash");
      Trashbin.innerHTML = "Delete";
      let edit = document.createElement("button");
      edit.setAttribute("id", "edit");
      edit.innerHTML = "Edit";
      let wrap = <HTMLElement>document.querySelector("#wrapper");

     window.addEventListener('load', handleLoad);

     
   async function handleLoad(_event: Event): Promise<void> {

     let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add2"); 
     submit.addEventListener("click", sendTask);
    } 

    async function sendTask(_event:Event): Promise<void> { //link zum versenden funktioniert nicht 
      let formData: FormData = new FormData(form);
      let query: URLSearchParams = new URLSearchParams(<any>formData);
      await fetch("main.html"+ query.toString()); 
      alert("Task Submited!");
    }

    async function communicate(_url: RequestInfo): Promise<void> {
      let response: Response = await fetch(_url);
      let offer: string= await response.text();
      let gotdata: Datainput = JSON.parse(offer);
      // gotdata is empty, offer is a string, cant read the stuff out
      console.log("this"+gotdata);
      console.log("Response", response);
      console.log("before"+offer);
      document.querySelector("#div1")!.innerHTML = "Aufgabe: "+ offer; //+ "  bis zum: "+ gotdata["date"]+ "  Kommentar: "+ gotdata["comment"]+ "  Wird gemacht von: "+ gotdata["person"];
      runJson(gotdata);
  }
    communicate("Datainput.json");



    document.querySelector("#add")!.addEventListener("click", function () {
        wrap.style.setProperty("visibility", "visible");

    });
    
    document.querySelector("#add2")!.addEventListener("click", function (e) {
      wrap.style.setProperty("visibility", "hidden"); 
      getData();
      document.getElementById("div1")!.appendChild(newdiv);
      document.querySelector("#div1")!.appendChild(newP);
      newP.innerHTML = "Aufgabe: "+ taskArray1[0] + "  bis zum: "+ taskArray1[1]+ "  Kommentar: "+ taskArray1[2]+ "  Wird gemacht von: "+ taskArray1[3];
      e.preventDefault();
      newP.appendChild(Trashbin); 
      newP.appendChild(edit);
    });

    edit.addEventListener("click", function () {
      wrap.style.setProperty("visibility", "visible");
    });
    Trashbin.addEventListener("click", function () {
      this!.parentNode!.parentNode!.removeChild(this!.parentNode!);
  });

    async function runJson(_data: Datainput): Promise <void>{

   for(let i = 0; i < _data.input.length; i++ ){


    }


  }; 









































}