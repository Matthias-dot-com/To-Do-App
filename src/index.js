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

  cross.addEventListener("click", createProject)


  function createDialog() {
    return `<dialog id="newDialog">
     <form method="dialog" class="myForm">
     <h1>Project</h1>
    <label>Project Name : <textarea></textarea></label>
     <input type="submit" value="add" id="add">
    </form></dialog>`;
  }
  function createProject() { main.innerHTML = createDialog();
    const dialog = document.querySelector("dialog")
    dialog.showModal();
    const btn = document.querySelector("input[type='submit']");
    btn.addEventListener("submit",(event)=>{
      event.preventDefault();
      dialog.close();}
     )
  }
  function deleteProject() {}
  function editProject() {}
  function storeToLocalStorage() {}
  function removeFromLocalStorage() {}
});
