namespace Datensammlung {

    export interface Aufgabe {
        taskname: string;
        date: string;
        comment: string;
        person: Selection[];
        progress: boolean;

    }

    let form = <HTMLFormElement>document.querySelector("#from1");
    
    form.onsubmit = () => {
        const formData = new FormData(form);
      
        console.log(formData);
        const text = formData.get('textInput') as string;
        console.log(text);
        return false; // prevent reload
      };


/*
    let data: Aufgabe = {
        taskname: , date: "17.04.2023", comment: "nicht vergessen das zu machen....", person: [], progress: true
    };*/
}