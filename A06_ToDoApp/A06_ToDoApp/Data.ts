namespace Datensammlung06 {
  /*
  Aufgabe: <Aufgabe 4 ToDo>
  Name: <Judith Pauler>
  Matrikel: <272240>
  Datum: <22.04.23>
  Quellen: <Madeleine Hansen>
  */

  let form: HTMLFormElement = document.querySelector("#form1")!;
  let allTasks: Task[] = [];
  interface Task {
    id?: string;
    taskname: string;
    date: string;
    comment: string;
    person: string;
    box: string;
  }

  function getData(): Task {
    let taskArray: String[];

    let formData = new FormData(form);
    console.log(formData);
    let text0 = formData.get("taskname") as string;
    let text1 = formData.get("date") as string;
    let text2 = formData.get("comment") as string;
    let text3 = formData.get("Person") as string;
    let text4 = formData.get("box") as string;

    let task: Task = {
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
  // Interface for JSON-Data
  interface FormDataJSON {
    [key: string]: FormDataEntryValue | FormDataEntryValue[];
  }

  let formData: FormData = new FormData(form);
  let json: FormDataJSON = {};

  for (let key of formData.keys())
    if (!json[key]) {
      let values: FormDataEntryValue[] = formData.getAll(key);
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
  let wrap = <HTMLElement>document.querySelector("#wrapper");

  window.addEventListener("load", handleLoad);

  async function handleLoad(_event: Event) {
    let submit: HTMLButtonElement = <HTMLButtonElement>(
      document.querySelector("#add2")
    );
    submit.addEventListener("click", sendTask);

    document.getElementById("div1")!.appendChild(newdiv);
    document.querySelector("#div1")!.appendChild(newP);
    const stringData = await getTasks();
    const parsedData = JSON.parse(stringData);
    Object.entries(parsedData.data).forEach((entry) => {
      let [key, value] = entry;
      let convertedValue = value as object;
      console.log(convertedValue);
      let htmlTask = document.createElement("p");
      document.getElementById("div1")!.appendChild(newdiv);
      document.querySelector("#div1")!.appendChild(htmlTask);

      let task: Task = {
        id: key,
        taskname: convertedValue["taskname"],
        date: convertedValue["date"],
        comment: convertedValue["comment"],
        person: convertedValue["person"],
        box: convertedValue["inprogress"],
      };

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
      let Trashbin = document.createElement("button");
      Trashbin.setAttribute("id", "trash");
      Trashbin.innerHTML = "Delete";
      let edit = document.createElement("button");
      edit.setAttribute("id", "edit");
      edit.innerHTML = "Edit";

      htmlTask.appendChild(Trashbin);
      htmlTask.appendChild(edit);
    });
    console.log(allTasks);
  }

  async function sendTask(_event: Event): Promise<void> {
    let formData: FormData = new FormData(form);
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    //
    query.set("command", "insert");
    query.set("collection", "Tasks");
    query.set("data", JSON.stringify(json));
    let response = await fetch(
      "https://webuser.hs-furtwangen.de/~paulerju/Database/" +
      "?" +
      query.toString()
    ); //Send data to Databank

    alert("Task Submited!");
  }
  async function getTasks(): Promise<string> {
    const params = "command=find&collection=Tasks";
    let request = await fetch(
      "https://webuser.hs-furtwangen.de/~paulerju/Database/?" + params
    );
    let text = await request.text();
    return text;
  }
  document.querySelector("#add")!.addEventListener("click", function() {
    wrap.style.setProperty("visibility", "visible");
  });

  document.querySelector("#add2")!.addEventListener("click", function(e) {
    wrap.style.setProperty("visibility", "hidden");
    let task = getData();

    document.getElementById("div1")!.appendChild(newdiv);
    document.querySelector("#div1")!.appendChild(newP);

    newP.innerHTML =
      "Aufgabe: " +
      task.taskname +
      "  bis zum: " +
      task.date +
      "  Kommentar: " +
      task.comment +
      "  Wird gemacht von: " +
      task.person;
    e.preventDefault();

    newP.appendChild(Trashbin);
    newP.appendChild(edit);
  });

  document
    .querySelector("#update")!
    .addEventListener("click", async function(e) {
      wrap.style.setProperty("visibility", "hidden");
      let task = getData();
      document.getElementById("div1")!.appendChild(newdiv);
      document.querySelector("#div1")!.appendChild(newP);
      newP.innerHTML =
        "Aufgabe: " +
        task.taskname +
        "  bis zum: " +
        task.date +
        "  Kommentar: " +
        task.comment +
        "  Wird gemacht von: " +
        task.person;
      e.preventDefault();
      let formData: FormData = new FormData(form);
      let query: URLSearchParams = new URLSearchParams(<any>formData);
      query.set("command", "update");
      query.set("collection", "Tasks");
      query.set("id", "644a4b0dbe4cd");
      //  query.set("data",taskArray1); turn taskArray1 to string
      await fetch(
        "https://webuser.hs-furtwangen.de/~paulerju/Database/" +
        "?" +
        query.toString()
      );
    });

  // await
  edit.addEventListener("click", async function() {
    wrap.style.setProperty("visibility", "visible");
  });

  Trashbin.addEventListener("click", async function() {
    this!.parentNode!.parentNode!.removeChild(this!.parentNode!);
    let formData: FormData = new FormData(form);
    let query: URLSearchParams = new URLSearchParams(<any>formData);

    query.set("command", "delete");
    query.set("collection", "Tasks");
    query.set("id", "644a4b0dbe4cd");
    await fetch(
      "https://webuser.hs-furtwangen.de/~paulerju/Database/" +
      "?" +
      query.toString()
    ); //Delete data with id: ...

    alert("Task deleted!");
  });
}
