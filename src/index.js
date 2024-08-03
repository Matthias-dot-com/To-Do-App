import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  const sideBar = document.querySelector(".side-bar");
  const main = document.querySelector(".main");
  const sideBarList = document.createElement("div");
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
  <div id="dialog">    
    <dialog id="newDialog">
     <form method="dialog" class="myForm">
     <h1>Project</h1>
    <label>Project Name : <textarea></textarea></label>
     <input type="submit" value="add" id="add">
    </form></dialog></div>`;
  }
  
  cross.addEventListener("click", createProject);

  const textArea = document.querySelector("textarea");
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let content = createMainContent(textArea);
    main.appendChild(content);
    const dltBtn = document.querySelector(".delete");
    const dial = document.getElementById("dialog");
    const dialog = document.querySelector("dialog");

    dltBtn.addEventListener("click", () => main.remove(event.currentTarget));
    textArea.value = "";
    dialog.close();
    document.body.remove(dial)
  });

  function createProject() {
    document.body.innerHTML += createDialog();
    const dialog = document.querySelector("dialog");

    const dial = document.getElementById("dialog");
    dial.style.position = "absolute";
    dial.style.zIndex = "1000";
    dialog.showModal();
  }

  function createMainContent(textArea) {
    const divMain = document.createElement("div");
    divMain.innerHTML = `
    <div class="project">
     <p>Task</p>
     <div class="task">
     <p>${textArea.value}</p>
     </div>
     <button class="edit">Edit</button>
          <button class="delete">Delete</button>

      </div>`;
    return divMain;
  }

  function deleteProject() {}
  function editProject() {}
  function storeToLocalStorage() {}
  function removeFromLocalStorage() {}
});
