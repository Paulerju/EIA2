namespace Datensammlung {

    export interface Aufgabe {
        taskname: string;
        date: string;
        comment: string;
        person: Selection[];
        progress: boolean;

    } 

    let taskArray1: String [] = []; 
    

  function getData() {

        const form: HTMLFormElement = document.querySelector('#form1')!;

        form.onsubmit = () => {
            const formData = new FormData(form);

            console.log(formData);
            const text0 = formData.get('taskname') as string;
            const text1 = formData.get('date') as string;
            const text2 = formData.get('comment') as string;
            const text3 = formData.get('Person') as string;
            const text4 = formData.get('box') as string;
            let taskArray: String [] = [text0, text1, text2, text3, text4]; 
            console.log(taskArray);
            taskArray1.concat(taskArray); // why isnt this working?
            
            return false; 
        };
    }
   let wrap = <HTMLElement> document.querySelector("#wrapper"); 
  

   document.querySelector("#bye")?.addEventListener("click",function(){
   
   });
   
   document.querySelector("#add")?.addEventListener("click",function(){
     wrap.style.setProperty("visibility", "visible"); 
     
   
   });
   
   document.querySelector("#add2")?.addEventListener("click",function(){
    // wrap.style.setProperty("visibility", "hidden"); 
    getData();
    console.log("taskArray1: " + taskArray1); 
    document.createElement("div").setAttribute("id", "tasknew");
    document.createElement("p"); 
    
    

   
   });
   
   document.querySelector("#box")?.addEventListener("click",function(){
    
   });


    /*
        let data: Aufgabe = {
            taskname: "Text", date: "17.04.2023", comment: "nicht vergessen das zu machen....", person: [], progress: true
        };*/
}