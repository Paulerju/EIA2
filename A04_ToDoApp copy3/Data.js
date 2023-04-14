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
    let add = document.querySelector("#add2");
    let strArray1 = taskArray1.toString();
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
    // let div1 = document.querySelector("#task1");
    let Trashbin = document.createElement("button");
    Trashbin.setAttribute("id", "trash");
    Trashbin.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
        taskArray1.pop();
    });
    document.querySelector("#add").addEventListener("click", function () {
        wrap.style.setProperty("visibility", "visible");
    });
    function ArraytoString() {
        strArray1 = taskArray1.toString();
    }
    ;
    document.querySelector("#add2").addEventListener("click", function (e) {
        // wrap.style.setProperty("visibility", "hidden"); 
        getData();
        ArraytoString();
        console.log("out: " + strArray1);
        let newdiv = document.createElement("div");
        newdiv.setAttribute("id", "newtask");
        let newP = document.createElement("p");
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        newP.innerHTML = strArray1;
        e.preventDefault();
    });
    document.querySelector("#box")?.addEventListener("click", function () {
    });
})(Datensammlung || (Datensammlung = {}));
//# sourceMappingURL=Data.js.map