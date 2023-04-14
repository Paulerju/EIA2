"use strict";
var Datensammlung;
(function (Datensammlung) {
    /* export interface Aufgabe {
         taskname: string;
         date: string;
         comment: string;
         person: Selection[];
         progress: boolean;
 
     } */
    let taskArray1 = [];
    function getData() {
        const form = document.querySelector('#form1');
        let taskArray;
        const formData = new FormData(form);
        console.log(formData);
        const text0 = formData.get('taskname');
        const text1 = formData.get('date');
        const text2 = formData.get('comment');
        const text3 = formData.get('Person');
        const text4 = formData.get('box');
        taskArray = [text0, text1, text2, text3, text4];
        console.log("getData: " + taskArray);
        taskArray1 = taskArray; // why isnt this working?
        taskArray1 = taskArray;
        console.log("in: " + taskArray1);
        return taskArray1;
    }
    ;
    let wrap = document.querySelector("#wrapper");
    document.querySelector("#add").addEventListener("click", function () {
        wrap.style.setProperty("visibility", "visible");
    });
    document.querySelector("#add2").addEventListener("click", function (e) {
        wrap.style.setProperty("visibility", "hidden");
        getData();
        let newdiv = document.createElement("div");
        newdiv.setAttribute("id", "newtask");
        let newP = document.createElement("p");
        newdiv.setAttribute("id", "newp");
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        newP.innerHTML = "Aufgabe: " + taskArray1[0] + "  bis zum: " + taskArray1[1] + "  Kommentar: " + taskArray1[2] + "  Wird gemacht von: " + taskArray1[3];
        e.preventDefault();
        let Trashbin = document.createElement("button");
        Trashbin.setAttribute("id", "trash");
        newP.appendChild(Trashbin);
        Trashbin.innerHTML = "Delete";
        Trashbin.addEventListener("click", function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
            taskArray1.pop();
        });
        let edit = document.createElement("button");
        edit.setAttribute("id", "edit");
        newP.appendChild(edit);
        edit.innerHTML = "Edit";
        edit.addEventListener("click", function () {
            wrap.style.setProperty("visibility", "visible");
        });
        if (taskArray1[4] == "on") { //Doesnt work yet, should change color
            newP.style.setProperty("background-color:", " rgb(0, 166, 64)");
        }
    });
})(Datensammlung || (Datensammlung = {}));
//# sourceMappingURL=Data.js.map