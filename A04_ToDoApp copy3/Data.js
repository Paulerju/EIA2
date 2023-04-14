"use strict";
var Datensammlung;
(function (Datensammlung) {
    let form = document.querySelector("#from1");
    form.onsubmit = () => {
        const formData = new FormData(form);
        console.log(formData);
        const text = formData.get('textInput');
        console.log(text);
        return false; // prevent reload
    };
    /*
        let data: Aufgabe = {
            taskname: , date: "17.04.2023", comment: "nicht vergessen das zu machen....", person: [], progress: true
        };*/
})(Datensammlung || (Datensammlung = {}));
//# sourceMappingURL=Data.js.map