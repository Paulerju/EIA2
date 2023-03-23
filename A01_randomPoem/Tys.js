"use strict";
var Poem;
(function (Poem) {
    /*
    Aufgabe: <Aufgabe 1 RandomPoem>
    Name: <Judith Pauler>
    Matrikel: <Deine Matrikelnummer>
    Datum: <Datum der letzten Bearbeitung>
    Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
    */
    let subjekte = ["Bellatrix", "Rodolphus", "Lucius", "James", "Snape", "Sirius"];
    let praedikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte = ["Zaubertränke", "Pflanzen", "Lupin", "Hogwarts", "die Karte der Rumtreiber", "Deatheaters"];
    /* let one: string[] = [];
     let two: string[] = [];
     let three: string[] = []; */
    // console.log(subjekte);
    // console.log(praedikate);
    // console.log(objekte);
    for (let i = subjekte.length; i > 0; i--) {
        i = i;
        // console.log(i);
        console.log(getVerse(subjekte, praedikate, objekte));
    }
    function getVerse(_a, _b, _c) {
        let vers = "";
        let count = Math.random() * _a.length;
        count = Math.floor(count);
        vers = vers + _a[count] + " ";
        _a.splice(count, 1);
        let count2 = Math.random() * _b.length;
        count2 = Math.floor(count2);
        vers = vers + _b[count2] + " ";
        _b.splice(count2, 1);
        let count3 = Math.random() * _c.length;
        count3 = Math.floor(count3);
        vers = vers + _c[count3] + " ";
        _c.splice(count3, 1);
        return vers;
    }
    // console.log(getVerse(subjekte, praedikate, objekte)); 
})(Poem || (Poem = {}));
//# sourceMappingURL=Tys.js.map