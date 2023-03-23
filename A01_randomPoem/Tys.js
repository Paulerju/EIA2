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
        getVerse(subjekte, praedikate, objekte);
    }
    function getVerse(_a, _b, _c) {
        let vers = "";
        let count = Math.random() * _a.length;
        count = Math.floor(count);
        console.log(count);
        _a.splice(count);
        let str = _a[1];
        return str;
    }
    // console.log(getVerse(subjekte, praedikate, objekte)); 
})(Poem || (Poem = {}));
//# sourceMappingURL=Tys.js.map