"use strict";
var Datensammlung;
(function (Datensammlung) {
    let taskArray1 = ["hello", "good"];
    function getData() {
        const form = document.querySelector('#form1');
        form.onsubmit = () => {
            const formData = new FormData(form);
            console.log(formData);
            const text0 = formData.get('taskname');
            const text1 = formData.get('date');
            const text2 = formData.get('comment');
            const text3 = formData.get('Person');
            const text4 = formData.get('box');
            let taskArray = [text0, text1, text2, text3, text4];
            console.log(taskArray);
            taskArray1.concat(taskArray); // why isnt this working?
            return false;
        };
    }
    let wrap = document.querySelector("#wrapper");
    let div1 = document.querySelector("#task1");
    let Trashbin = document.createElement("button");
    Trashbin.setAttribute("id", "trash");
    Trashbin.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
        taskArray1.pop();
    });
    document.querySelector("#add")?.addEventListener("click", function () {
        wrap.style.setProperty("visibility", "visible");
        (document.createElement('button'));
    });
    document.querySelector("#add2")?.addEventListener("click", function () {
        // wrap.style.setProperty("visibility", "hidden"); 
        getData();
        console.log("taskArray1: " + taskArray1);
        let newdiv = document.createElement("div"); // nothing gets added
        newdiv.setAttribute("id", "newtask");
        document.getElementById("div1").appendChild(newdiv);
    });
    document.querySelector("#box")?.addEventListener("click", function () {
    });
    /*
        let data: Aufgabe = {
            taskname: "Text", date: "17.04.2023", comment: "nicht vergessen das zu machen....", person: [], progress: true
        };*/
})(Datensammlung || (Datensammlung = {}));
//# sourceMappingURL=Data.js.map