namespace Datensammlung {

   export interface Aufgabe {
        taskname: string; 
        date: Date; 
        comment: string;
        //person? (select)
        progress: boolean; 
    
    }
// do we need this for our work? 
   export interface Data {
        [category: string]: Aufgabe[];
    }

    let data: Aufgabe = {
             taskname:"Klo putzen", date: (17.04.2023) , comment: "nicht vergessen das zu machen....", progress: true  
    }; 
}