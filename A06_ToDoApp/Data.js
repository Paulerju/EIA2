"use strict";
var Datensammlung06;
(function (Datensammlung06) {
    /*
    Aufgabe: <Aufgabe 4 ToDo>
    Name: <Judith Pauler>
    Matrikel: <272240>
    Datum: <22.04.23>
    Quellen: <Madeleine Hansen>
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
    let formData = new FormData(form);
    let json = {};
    for (let key of formData.keys())
        if (!json[key]) {
            let values = formData.getAll(key);
            json[key] = values.length > 1 ? values : values[0];
        }
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
    function handleLoad(_event) {
        let submit = document.querySelector("#add2");
        submit.addEventListener("click", sendTask);
        communicate("Datainput.json");
    }
    ;
    async function sendTask(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        query.set("command", "insert");
        query.set("collection", "Tasks");
        query.set("data", JSON.stringify(json));
        await fetch("https://webuser.hs-furtwangen.de/~paulerju/Database/" + "?" + query.toString()); //Send data to Databank
        alert("Task Submited!");
    }
    ;
    async function communicate(_url) {
        let response = await fetch(_url);
        let offer = await response.text();
        let gotdata = JSON.parse(offer);
        console.log("this" + gotdata);
        console.log("Response", response);
        console.log("before" + offer);
        document.querySelector("#div1").innerHTML = "Aufgabe: " + offer;
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        newP.appendChild(Trashbin);
        newP.appendChild(edit);
    }
    document.querySelector("#add").addEventListener("click", function () {
        wrap.style.setProperty("visibility", "visible");
    });
    document.querySelector("#add2").addEventListener("click", function (e) {
        wrap.style.setProperty("visibility", "hidden");
        getData();
        console.log(getData);
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        newP.innerHTML = "Aufgabe: " + taskArray1[0] + "  bis zum: " + taskArray1[1] + "  Kommentar: " + taskArray1[2] + "  Wird gemacht von: " + taskArray1[3];
        e.preventDefault();
        newP.appendChild(Trashbin);
        newP.appendChild(edit);
    });
    document.querySelector("#update").addEventListener("click", async function () {
        wrap.style.setProperty("visibility", "hidden");
        getData();
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        newP.innerHTML = "Aufgabe: " + taskArray1[0] + "  bis zum: " + taskArray1[1] + "  Kommentar: " + taskArray1[2] + "  Wird gemacht von: " + taskArray1[3];
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        query.set("command", "update");
        query.set("collection", "Tasks");
        query.set("id", "644a4b0dbe4cd");
        //  query.set("data",taskArray1); turn taskArray1 to string
        await fetch("https://webuser.hs-furtwangen.de/~paulerju/Database/" + "?" + query.toString());
    });
    // await 
    edit.addEventListener("click", async function () {
        wrap.style.setProperty("visibility", "visible");
    });
    Trashbin.addEventListener("click", async function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        query.set("command", "delete");
        query.set("collection", "Tasks");
        query.set("id", "644a4b0dbe4cd");
        await fetch("https://webuser.hs-furtwangen.de/~paulerju/Database/" + "?" + query.toString()); //Delete data with id: ...
        alert("Task deleted!");
    });
})(Datensammlung06 || (Datensammlung06 = {}));
//# sourceMappingURL=Data.js.map