"use strict";
var Datensammlung;
(function (Datensammlung) {
    /*
    Aufgabe: <Aufgabe 4 ToDo>
    Name: <Judith Pauler>
    Matrikel: <272240>
    Datum: <14.04.23>
    Quellen: <>
    */
    let taskArray1 = [];
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
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        // new stuff?
        let offer = await response.text();
        console.log(offer);
        taskArray1 = JSON.parse(offer);
    }
    communicate("Datainput.json");
    console.log(communicate);
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