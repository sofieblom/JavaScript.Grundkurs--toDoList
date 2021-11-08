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
let myToDosDone = [];
let taskContainer = document.createElement("div");

// Mina to-dos från start
function myTasks() {
  let ul = document.createElement("ul");
  let myAddsBox = document.getElementById("myAddsBox");
  myAddsBox.innerHTML = "";

  for (let i = 0; i < myToDos.length; i++) {
    if (myToDos[i].done === false) {
      let li = document.createElement("li");

      myAddsBox.appendChild(taskContainer);
      myAddsBox.appendChild(ul);
      taskContainer.appendChild(li);
      ul.appendChild(li);
      li.innerHTML = myToDos[i].todo;

      // FLYTTA TILL DONE BOX
      li.addEventListener("click", function () {
        myToDos[i].done = !myToDos[i].done;

        myTasks();
        // myAddsBox.removeChild(li); // ÄNDRA TILL DONE/ BOOOOLEAN
        //moveBack();
      });
    } else {
      let li = document.createElement("li");
      li.innerHTML = myToDos[i].todo;

      //   myToDosDone.push(myToDos[i]);

      let newDiv = document.getElementById("doneBox");
      newDiv.appendChild(li);
      //   ul.appendChild(li);
      //   let doneBox = document.getElementById("doneBox");
      //   doneBox.appendChild(taskContainer);
      //   doneBox.appendChild(ul);
      //   taskContainer.appendChild(li);
      //   ul.appendChild(li);

      li.style.textDecoration = "line-through";

      //   console.log(myToDos[i].done);
      console.log(myToDos[i].done);
      myToDos.splice(i, 1);
    }
  }
}

// Lägg till to-dos i listan
function handleAdd() {
  // ADDDDD MED LISTAN KOLLA KORT PÅ TELEFON

  let myInput = document.getElementById("myInput");

  let td6 = new ToDo(myInput.value);
  myToDos.push(td6);

  //   console.log(myToDos);
  //   console.log(myInput);

  //   myToDos[i].todo.push();
  //   myToDos[i].todo.push();
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
