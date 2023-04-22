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
    let form;
    ;
    function getData() {
        let form = document.querySelector('#form1');
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
    async function handleLoade(_event) {
        let response = await fetch("Datainput.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        generateContent(data); // müssen die Daten einzeln noch einfügen
        let submit = document.querySelector("#add2");
        console.log("Submit" + submit);
        submit.addEventListener("click", sendTask);
    }
    handleLoade();
    async function sendTask(_event) {
        console.log("Task send");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        await fetch("main.html" + query.toString());
        alert("Task Submited!");
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        let offer = await response.text();
        console.log("before" + offer);
        let gotdata = JSON.parse(offer); //In string umwandeln?
        // gotdata is empty, offer is a string, cant read the stuff out
        console.log("this" + gotdata);
        // document.querySelector("#div1")!.innerHTML = "Aufgabe: "+ offer["taskname"] + "  bis zum: "+ gotdata["date"]+ "  Kommentar: "+ gotdata["comment"]+ "  Wird gemacht von: "+ gotdata["person"];
    }
    console.log("Start");
    communicate("Datainput.json");
    console.log("Ende");
    let firstp = document.createElement("p");
    document.querySelector("#div1")?.appendChild(firstp);
    firstp.innerHTML = "";
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
        });
        let edit = document.createElement("button");
        edit.setAttribute("id", "edit");
        newP.appendChild(edit);
        edit.innerHTML = "Edit";
        edit.addEventListener("click", function () {
            wrap.style.setProperty("visibility", "visible");
        });
    });
})(Datensammlung || (Datensammlung = {}));
//# sourceMappingURL=Data.js.map