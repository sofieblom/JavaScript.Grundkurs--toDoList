class ToDo {
  constructor(todo) {
    this.todo = todo;
  }
}

window.onload = function () {
  let button = document.getElementById("myButton");
  button.addEventListener("click", handleAdd);
  myTasks();
};

// Mina to-dos från start
function myTasks() {
  let td1 = new ToDo("Wake up");
  let td2 = new ToDo("Make coffee");
  let td3 = new ToDo("Drink coffee");
  let td4 = new ToDo("Make some more coffee");
  let td5 = new ToDo("Start the day");

  let myToDos = [td1, td2, td3, td4, td5];

  for (let i = 0; i < myToDos.length; i++) {
    let task = document.createElement("li");
    let myAddsBox = document.getElementById("myAddsBox");
    myAddsBox.appendChild(task);
    task.innerHTML = myToDos[i].todo;
  }
}

// Lägg till do-dos i listan
function handleAdd() {
  let myInput = document.getElementById("myInput");
  let myAddsBox = document.getElementById("myAddsBox");
  let li = document.createElement("li");
  myAddsBox.appendChild(li);
  li.innerHTML = myInput.value;
  myInput.value = ""; // Gör input-fältet tomt
}
