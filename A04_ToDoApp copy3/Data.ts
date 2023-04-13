namespace Datensammlung {

   export interface Aufgabe {
        taskname: string; 
        date: string; 
        comment: string;
        person: Selection[]; 
        progress: boolean; 
    
    }

    let formData1: FormData = new FormData(document.forms[0]);


    let data: Aufgabe = {
             taskname: , date: "17.04.2023" , comment: "nicht vergessen das zu machen....",person: [] , progress: true  
    }; 
}