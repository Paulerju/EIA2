"use strict";
var Datensammlung;
(function (Datensammlung) {
    /*
    Aufgabe: <Aufgabe 4 ToDo>
    Name: <Judith Pauler>
    Matrikel: <272240>
    Datum: <22.04.23>
    Quellen: <>
    */
    let taskArray1 = [];
    let form = document.querySelector('#form1');
    ;
    function getData() {
        let taskArray;
        let formData = new FormData(form);
        console.log(formData);
        let text0 = formData.get('taskname');
        let text1 = formData.get('date');
        let text2 = formData.get('comment');
        let text3 = formData.get('Person');
        let text4 = formData.get('box');
        taskArray = [text0, text1, text2, text3, text4];
        console.log("getData: " + taskArray);
        taskArray1 = taskArray;
        return taskArray1;
    }
    ;
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
    let wrap = document.querySelector("#wrapper");
    window.addEventListener('load', handleLoad);
    async function handleLoad(_event) {
        let submit = document.querySelector("#add2");
        submit.addEventListener("click", sendTask);
    }
    async function sendTask(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        await fetch("main.html" + query.toString());
        alert("Task Submited!");
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        let offer = await response.text();
        let gotdata = JSON.parse(offer);
        // gotdata is empty, offer is a string, cant read the stuff out
        console.log("this" + gotdata);
        console.log("Response", response);
        console.log("before" + offer);
        document.querySelector("#div1").innerHTML = "Aufgabe: " + offer; //+ "  bis zum: "+ gotdata["date"]+ "  Kommentar: "+ gotdata["comment"]+ "  Wird gemacht von: "+ gotdata["person"];
    }
    communicate("Datainput.json");
    document.querySelector("#add").addEventListener("click", function () {
        wrap.style.setProperty("visibility", "visible");
    });
    document.querySelector("#add2").addEventListener("click", function (e) {
        wrap.style.setProperty("visibility", "hidden");
        getData();
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        newP.innerHTML = "Aufgabe: " + taskArray1[0] + "  bis zum: " + taskArray1[1] + "  Kommentar: " + taskArray1[2] + "  Wird gemacht von: " + taskArray1[3];
        e.preventDefault();
        newP.appendChild(Trashbin);
        newP.appendChild(edit);
    });
    edit.addEventListener("click", function () {
        wrap.style.setProperty("visibility", "visible");
    });
    Trashbin.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
})(Datensammlung || (Datensammlung = {}));
//# sourceMappingURL=Data.js.map