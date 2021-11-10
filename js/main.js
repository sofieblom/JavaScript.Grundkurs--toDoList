class ToDo {
  constructor(todo) {
    this.todo = todo;
    this.done = false;
  }
}

window.onload = function () {
  let button = document.getElementById("myButton");
  button.addEventListener("click", handleAdd);

  // Press Enter
  myInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleAdd();
    }
  });

  myTasks();
};

let td1 = new ToDo("Wake up");
let td2 = new ToDo("Make coffee");
let td3 = new ToDo("Drink coffee");
let td4 = new ToDo("Make some more coffee");
let td5 = new ToDo("Start the day");

let myToDos = [td1, td2, td3, td4, td5];

// Mina to-dos från start
function myTasks() {
  let myAddsBox = document.getElementById("myAddsBox");
  let ul = document.createElement("ul");
  let myDoneBox = document.getElementById("doneBox");
  let doneUl = document.createElement("ul");
  doneUl.className = "doneUl";
  myAddsBox.innerHTML = "";
  myAddsBox.appendChild(ul);
  myDoneBox.innerHTML = "";
  myDoneBox.appendChild(doneUl);

  for (let i = 0; i < myToDos.length; i++) {
    if (myToDos[i].done === false) {
      let li = document.createElement("li");

      ul.appendChild(li);
      li.innerHTML =
        "<i class='fas fa-angle-double-right'></i>" + " " + myToDos[i].todo;

      // Klickhändelse - boolean
      li.addEventListener("click", function () {
        myToDos[i].done = !myToDos[i].done;

        myTasks();
      });
    } else {
      let li = document.createElement("li");
      li.innerHTML = "<i class='far fa-thumbs-up'></i>" + " " + myToDos[i].todo;

      li.style.textDecoration = "line-through";
      doneUl.appendChild(li);

      // Klickhändelse - boolean
      li.addEventListener("click", function () {
        myToDos[i].done = !myToDos[i].done;

        myTasks();
      });
    }
  }
}

// Lägg till to-dos i listan
function handleAdd() {
  let myInput = document.getElementById("myInput");

  let td6 = new ToDo(myInput.value);
  myToDos.push(td6);
  td6.id = "td6";

  myInput.value = " ";
  myTasks();
}
