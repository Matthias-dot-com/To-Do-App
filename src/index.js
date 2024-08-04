import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  const sideBar = document.querySelector(".side-bar");
  const main = document.querySelector(".main");
  const sideBarList = document.createElement("div");
  let isEditing = false;
  let editEvent = false;
  sideBarList.classList.add("project-container");

  function generateImageElement(id, src) {
    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("id", id);
    const image = document.createElement("img");
    image.setAttribute("src", src);
    imageContainer.appendChild(image);
    return imageContainer;
  }

  function createSidebarContent() {
    const dropdownImage = generateImageElement("dropDown", "./icons/drop.png");
    sideBarList.innerHTML = `<h3>Projects</h3>
 `;
    sideBarList.appendChild(dropdownImage);
    sideBar.appendChild(sideBarList);
  }
  sideBar.appendChild(generateImageElement("menu", "./icons/menu.svg"));
  const menu = document.querySelector("#menu");
  const pMenu = document.createElement("p");
  pMenu.innerHTML = "TO-DO LIST";
  menu.appendChild(pMenu);

  createSidebarContent();

  sideBar.appendChild(generateImageElement("cross", "./icons/plus.svg"));
  const cross = document.querySelector("#cross");
  const divCross = document.createElement("div");
  divCross.innerHTML = `<h4>Add Task Here</h4>`;
  cross.append(divCross);

  function createDialog() {
    return `
    <dialog id="newDialog">
     <form method="dialog" class="myForm">
     <h1>Project</h1>
    <label>Project Name : <textarea></textarea></label>
     <input type="submit" value="add" id="add">
    </form></dialog></div>`;
  }

  cross.addEventListener("click", createProject);

  const divDialog = document.createElement("div");

  divDialog.setAttribute("id", "dialog");

  divDialog.innerHTML = createDialog();
  const dialog = divDialog.querySelector("dialog");
  const textArea = divDialog.querySelector("textarea");

  const form = divDialog.querySelector("form");
  divDialog.style.visibility = "hidden";

  function createProject(isEditing, editEvent) {
    document.body.appendChild(divDialog);
    divDialog.style.visibility = "visible";
    divDialog.style.zIndex = "1000";
    dialog.showModal();
  }

  main.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      handleDelete(e.target);
    } else if (e.target.classList.contains("edit")) {
      handleEdit(e.currentTarget,e.target);
    }
  });

  function handleDelete(event) {
    event.closest(".divMain").remove();
  }

  function handleEdit(e,E) {
    isEditing = true;
    editEvent = E;
    let p = e.querySelector(".todo");
    textArea.value = p.textContent;
    createProject(isEditing, editEvent);
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!isEditing) {
      let content = createMainContent(textArea);
      main.appendChild(content);
    } else {
      editEvent.closest(".divMain").innerHTML = `
    <div class="project">
     <p>Task</p>
     <div class="task">
     <p class="todo">${textArea.value}</p>
     </div>
     <button class="edit">Edit</button>
          <button class="delete">Delete</button>
      </div>`;
    }

    textArea.value = "";
    dialog.close();
  });

  function createMainContent(textArea) {
    const divMain = document.createElement("div");
    divMain.classList.add("divMain");
    divMain.innerHTML = `
    <div class="project">
     <p>Task</p>
     <div class="task">
     <p class="todo">${textArea.value}</p>
     </div>
     <button class="edit">Edit</button>
          <button class="delete">Delete</button>

      </div>`;
    return divMain;
  }

  function storeToLocalStorage() {}
  function removeFromLocalStorage() {}
});
