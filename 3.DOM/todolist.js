class Item {
  constructor(text, context) {
    this.context = context;
    this.text = text;
    this.create();
    return this.li;
  }

  create() {
    const li = document.createElement("li");
    this.li = li;
    const divItem = document.createElement("div");
    const divText = document.createElement("div");
    const button = document.createElement("button");
    this.button = button;
    const divDvider = document.createElement("div");

    li.setAttribute("class", "todo-list");

    divItem.setAttribute("class", "item");
    divText.setAttribute("class", "text");
    divText.innerHTML = this.text;
    button.setAttribute("class", "remove-btn");
    button.addEventListener("click", () => {
      this.remove();
    });
    button.innerHTML = '<i class="fas fa-trash"></i>';
    divDvider.setAttribute("class", "divider");

    li.append(divItem);
    li.append(divDvider);

    divItem.append(divText);
    divItem.append(button);
    this.context.append(li);
  }
  remove() {
    this.context.removeChild(this.li);
  }
}

const addBtn = document.querySelector(".add-btn");
const inputText = document.querySelector("#new-todo");
const todoList = document.querySelector(".todo-list");

window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    createNewTodo();
  }
});

addBtn.addEventListener("click", () => {
  createNewTodo();
});

function createNewTodo() {
  const text = inputText.value;
  const li = new Item(text, todoList);
  inputText.value = "";
}
