namespace Poem {
    /*
    Aufgabe: <Aufgabe 1 RandomPoem>
    Name: <Judith Pauler>
    Matrikel: <Deine Matrikelnummer>
    Datum: <Datum der letzten Bearbeitung>
    Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
    */

    let subjekte: string[] = ["Bellatrix", "Rodolphus", "Lucius", "James", "Snape", "Sirius"];
    let praedikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte: string[] = ["Zaubertränke", "Pflanzen", "Lupin", "Hogwarts", "die Karte der Rumtreiber", "Deatheaters"];

   /* let one: string[] = []; 
    let two: string[] = []; 
    let three: string[] = []; */

   // console.log(subjekte);
   // console.log(praedikate);
   // console.log(objekte);

    for (let i: number = subjekte.length; i > 0; i--) {
        i = i;
       // console.log(i);
        getVerse(subjekte, praedikate, objekte);
       
    }

    function getVerse(_a: string[], _b: string[], _c: string[]): string{

        let vers: string = "";
        let count: number = Math.random() * _a.length; 
        count = Math.floor(count);
        console.log(count);
        _a.splice(count);

        let str: string = _a[1];
        return str; 
    }

   // console.log(getVerse(subjekte, praedikate, objekte)); 
}