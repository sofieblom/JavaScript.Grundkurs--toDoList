class ToDo {
  constructor(todo) {
    this.todo = todo;
    this.done = false;
  }
}

window.onload = function () {
  let button = document.getElementById("myButton");
  button.addEventListener("click", handleAdd);

  myInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleAdd(); // Press Enter
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
  let headingContainerDone = document.getElementById("headingContainer");
  let doneUl = document.createElement("ul");
  doneUl.className = "doneUl";
  myAddsBox.innerHTML = "";
  myDoneBox.innerHTML = "";
  myAddsBox.appendChild(ul);
  myDoneBox.appendChild(headingContainerDone);
  myDoneBox.appendChild(doneUl);

  for (let i = 0; i < myToDos.length; i++) {
    if (myToDos[i].done === false) {
      let li = document.createElement("li");

      ul.appendChild(li);
      li.innerHTML = myToDos[i].todo;

      // Klickhändelse - false blir true
      li.addEventListener("click", function () {
        myToDos[i].done = !myToDos[i].done;

        myTasks();
      });
    } else {
      let li = document.createElement("li");
      li.innerHTML = myToDos[i].todo;

      doneUl.appendChild(li);

      li.style.textDecoration = "line-through";

      console.log(myToDos[i].done);
    }
  }
}

// Lägg till to-dos i listan
function handleAdd() {
  let myInput = document.getElementById("myInput");

  let td6 = new ToDo(myInput.value);
  myToDos.push(td6);

  myInput.value = " ";
  myTasks();

  //   let myAddsBox = document.getElementById("myAddsBox");
  //   let ul = document.createElement("ul");
  //   let li = document.createElement("li");
  //   ul.appendChild(li);
  //   let text = myInput.value;
  //   li.innerHTML = text;

  //   li.addEventListener("click", function () {
  //     li.style.textDecoration = "line-through";
  //     doneBox.appendChild(li);
  //     // taskContainer.appendChild(li);
  //     myAddsBox.removeChild(li);
  //   });
}
