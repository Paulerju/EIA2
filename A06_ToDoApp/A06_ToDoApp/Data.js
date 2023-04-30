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
    let form = document.querySelector("#form1");
    let allTasks = [];
    function getData() {
        let taskArray;
        let formData = new FormData(form);
        console.log(formData);
        let text0 = formData.get("taskname");
        let text1 = formData.get("date");
        let text2 = formData.get("comment");
        let text3 = formData.get("Person");
        let text4 = formData.get("box");
        let task = {
            taskname: text0,
            date: text1,
            comment: text2,
            person: text3,
            box: text4,
        };
        taskArray = [text0, text1, text2, text3, text4];
        console.log("getData: " + taskArray);
        return task;
    }
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
    let edit = document.createElement("button");
    edit.setAttribute("id", "edit");
    edit.innerHTML = "Edit";
    let activeID;
    let wrap = document.querySelector("#wrapper");
    window.addEventListener("load", handleLoad);
    async function handleLoad(_event) {
        let submit = (document.querySelector("#add2"));
        submit.addEventListener("click", sendTask);
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        const stringData = await getTasks();
        const parsedData = JSON.parse(stringData);
        Object.entries(parsedData.data).forEach((entry) => {
            let [key, value] = entry;
            let convertedValue = value;
            console.log(convertedValue);
            let htmlTask = document.createElement("p");
            document.getElementById("div1").appendChild(newdiv);
            document.querySelector("#div1").appendChild(htmlTask);
            let task = {
                id: key,
                taskname: convertedValue["taskname"],
                date: convertedValue["date"],
                comment: convertedValue["comment"],
                person: convertedValue["person"],
                box: convertedValue["inprogress"],
            };
            htmlTask.setAttribute("id", key);
            allTasks.push(task);
            htmlTask.innerHTML =
                "Aufgabe: " +
                    task.taskname +
                    "  bis zum: " +
                    task.date +
                    "  Kommentar: " +
                    task.comment +
                    "  Wird gemacht von: " +
                    task.person;
            let trashbin = document.createElement("button");
            trashbin.setAttribute("id", "trash");
            trashbin.innerHTML = "Delete";
            trashbin.addEventListener("click", async function () {
                let task = this.parentNode;
                let query = new URLSearchParams(formData);
                query.set("command", "delete");
                query.set("collection", "Tasks");
                query.set("id", task.id);
                this.parentNode.parentNode.removeChild(this.parentNode);
                let response = await fetch("https://webuser.hs-furtwangen.de/~paulerju/Database/" +
                    "?" +
                    query.toString()); //Delete data with id: ...
                console.log(response);
                if (response.ok) {
                    alert("Task deleted!");
                }
            });
            let edit = document.createElement("button");
            edit.setAttribute("id", "edit");
            edit.innerHTML = "Edit";
            htmlTask.appendChild(trashbin);
            htmlTask.appendChild(edit);
        });
        console.log(allTasks);
    }
    async function sendTask(_event) {
        let task = getData();
        let params = "?command=insert&collection=Tasks&data=" + JSON.stringify(task);
        _event.preventDefault();
        let response = await fetch("https://webuser.hs-furtwangen.de/~paulerju/Database/" + params); //Send data to Databank
        if (response.ok) {
            console.log(response);
            alert("Task Submited!");
        }
    }
    async function getTasks() {
        const params = "command=find&collection=Tasks";
        let request = await fetch("https://webuser.hs-furtwangen.de/~paulerju/Database/?" + params);
        let text = await request.text();
        return text;
    }
    document.querySelector("#add").addEventListener("click", function () {
        wrap.style.setProperty("visibility", "visible");
    });
    document.querySelector("#add2").addEventListener("click", function () {
        wrap.style.setProperty("visibility", "hidden");
        let task = getData();
        let htmlTask = document.createElement("p");
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(htmlTask);
        allTasks.push(task);
        htmlTask.innerHTML =
            "Aufgabe: " +
                task.taskname +
                "  bis zum: " +
                task.date +
                "  Kommentar: " +
                task.comment +
                "  Wird gemacht von: " +
                task.person;
        let trashbin = document.createElement("button");
        trashbin.setAttribute("id", "trash");
        trashbin.innerHTML = "Delete";
        let edit = document.createElement("button");
        edit.setAttribute("id", "edit");
        edit.innerHTML = "Edit";
        htmlTask.appendChild(trashbin);
        htmlTask.appendChild(edit);
        console.log(allTasks);
    });
    document
        .querySelector("#update")
        .addEventListener("click", async function (e) {
        wrap.style.setProperty("visibility", "hidden");
        let task = getData();
        e.preventDefault();
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        query.set("command", "update");
        query.set("collection", "Tasks");
        query.set("id", activeID);
        //  query.set("data",taskArray1); turn taskArray1 to string
        await fetch("https://webuser.hs-furtwangen.de/~paulerju/Database/" +
            "?" +
            query.toString());
    });
    // await
    edit.addEventListener("click", async function () {
        wrap.style.setProperty("visibility", "visible");
    });
})(Datensammlung06 || (Datensammlung06 = {}));
//# sourceMappingURL=Data.js.map